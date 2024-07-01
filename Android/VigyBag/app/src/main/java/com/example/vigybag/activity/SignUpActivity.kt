package com.example.vigybag.activity

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.ProgressBar
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.example.vigybagg.R
import com.example.vigybagg.databinding.ActivitySignUpBinding
import com.example.vigybagg.databinding.ProgressDialogBinding
import com.example.vigybagg.utils
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.firebase.FirebaseException
import com.google.firebase.FirebaseTooManyRequestsException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.PhoneAuthCredential
import com.google.firebase.auth.PhoneAuthOptions
import com.google.firebase.auth.PhoneAuthProvider
import com.hbb20.CountryCodePicker
import java.util.concurrent.TimeUnit

class SignUpActivity : AppCompatActivity() {
    private lateinit var verify: Button
    private lateinit var etPhoneNumber: EditText
    private lateinit var auth: FirebaseAuth
    private lateinit var number: String
    private lateinit var google: ImageView
    private lateinit var googleSignInClient: GoogleSignInClient
//    private lateinit var mProgressBar : ProgressBar

    private lateinit var binding: ProgressDialogBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)
        google = findViewById(R.id.google)
//        ongooglebuttonClicked()

        val googleSignInOption = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.default_web_client_id)).requestEmail().build()

        googleSignInClient = GoogleSignIn.getClient(this, googleSignInOption)



        google.setOnClickListener {
            val signIntent = googleSignInClient.signInIntent
            launcher.launch(signIntent)
            startActivity(Intent(this@SignUpActivity, MainActivity::class.java))
        }


        init()
        verify.setOnClickListener {
            number = etPhoneNumber.text.trim().toString()
            if (number.isNotEmpty()) {
                if (number.length == 10) {
                    number = "+91$number"
//                    mProgressBar.visibility = View.VISIBLE
                    utils.showDialog(this@SignUpActivity, "Sending OTP")
                    val options = PhoneAuthOptions.newBuilder(auth)
                        .setPhoneNumber(number)       // Phone number to verify
                        .setTimeout(60L, TimeUnit.SECONDS) // Timeout and unit
                        .setActivity(this)                 // Activity (for callback binding)
                        .setCallbacks(callbacks) // OnVerificationStateChangedCallbacks
                        .build()
                    PhoneAuthProvider.verifyPhoneNumber(options)

                } else {
                    Toast.makeText(this, "Please Enter correct Number", Toast.LENGTH_SHORT).show()
                }
            } else {
                Toast.makeText(this, "Please Enter Number", Toast.LENGTH_SHORT).show()

            }
        }
    }


    private val launcher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->

            if (result.resultCode == Activity.RESULT_OK) {
                val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)

                if (task.isSuccessful) {
                    val account: GoogleSignInAccount? = task.result
                    val credential = GoogleAuthProvider.getCredential(account?.idToken, null)
                    FirebaseAuth.getInstance().signInWithCredential(credential)
                        .addOnCompleteListener { task ->

                            if (task.isSuccessful) {

                                Toast.makeText(this, "Sign-in Successful", Toast.LENGTH_SHORT)
                                    .show()
                                startActivity(Intent(this, MainActivity::class.java))
                                finish()
                            } else {
                                Toast.makeText(this, "Sign in field", Toast.LENGTH_SHORT).show()
                            }
                        }
                } else {
                    Toast.makeText(this, "Sign in field", Toast.LENGTH_SHORT).show()
                }

            }
        }


    private fun init() {
//        mProgressBar = findViewById(R.id.phoneProgressBar)
//        mProgressBar.visibility = View.INVISIBLE
        utils.hideDialog()
        verify = findViewById(R.id.verify)
        etPhoneNumber = findViewById(R.id.etPhoneNumber)
        auth = FirebaseAuth.getInstance()


    }


    private fun signInWithPhoneAuthCredential(credential: PhoneAuthCredential) {
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Toast.makeText(this, "Authenticate Successfully", Toast.LENGTH_SHORT).show()
                    sendToMain()
                } else {
                    // Sign in failed, display a message and update the UI
                    Log.d("TAG", "signInWithPhoneAuthCredential: ${task.exception.toString()}")
                    if (task.exception is FirebaseAuthInvalidCredentialsException) {
                        // The verification code entered was invalid
                    }
                    // Update UI
                }
//                mProgressBar.visibility = View.INVISIBLE
                utils.hideDialog()
            }
    }

    private fun sendToMain() {
        startActivity(Intent(this, MainActivity::class.java))
    }

    private val callbacks = object : PhoneAuthProvider.OnVerificationStateChangedCallbacks() {

        override fun onVerificationCompleted(credential: PhoneAuthCredential) {
            // This callback will be invoked in two situations:
            // 1 - Instant verification. In some cases the phone number can be instantly
            //     verified without needing to send or enter a verification code.
            // 2 - Auto-retrieval. On some devices Google Play services can automatically
            //     detect the incoming verification SMS and perform verification without
            //     user action.
            signInWithPhoneAuthCredential(credential)
        }

        override fun onVerificationFailed(e: FirebaseException) {
            // This callback is invoked in an invalid request for verification is made,
            // for instance if the the phone number format is not valid.

            if (e is FirebaseAuthInvalidCredentialsException) {
                // Invalid request
                Log.d("TAG", "onVerificationFailed: ${e.toString()}")
            } else if (e is FirebaseTooManyRequestsException) {
                // The SMS quota for the project has been exceeded
                Log.d("TAG", "onVerificationFailed: ${e.toString()}")
            }
//            mProgressBar.visibility = View.VISIBLE
            utils.showDialog(this@SignUpActivity, "Failed to verify")
            // Show a message and update the UI
        }

        override fun onCodeSent(
            verificationId: String,
            token: PhoneAuthProvider.ForceResendingToken
        ) {
            // The SMS verification code has been sent to the provided phone number, we
            // now need to ask the user to enter the code and then construct a credential
            // by combining the code with a verification ID.
            // Save verification ID and resending token so we can use them later
            val intent = Intent(this@SignUpActivity, OTPActivity::class.java)
            intent.putExtra("OTP", verificationId)
            intent.putExtra("resendToken", token)
            intent.putExtra("phoneNumber", number)
            startActivity(intent)
//            mProgressBar.visibility = View.INVISIBLE
            utils.hideDialog()
        }
    }


    override fun onStart() {
        super.onStart()
        if (auth.currentUser != null) {
            startActivity(Intent(this, MainActivity::class.java))
        }
    }


}