package com.example.vigybag.activity

import android.content.Intent
import android.os.Bundle
import android.os.Looper
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.vigybagg.R
import com.example.vigybagg.databinding.ActivityOtpactivityBinding
import com.example.vigybagg.utils
import com.google.firebase.FirebaseException
import com.google.firebase.FirebaseTooManyRequestsException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException
import com.google.firebase.auth.PhoneAuthCredential
import com.google.firebase.auth.PhoneAuthOptions
import com.google.firebase.auth.PhoneAuthProvider
import java.util.concurrent.TimeUnit
import java.util.logging.Handler

class OTPActivity : AppCompatActivity() {
    private lateinit var binding: ActivityOtpactivityBinding
    private lateinit var auth: FirebaseAuth
    private lateinit var continuee: Button
    private lateinit var resendTV: TextView
    private lateinit var et1: EditText
    private lateinit var et2: EditText
    private lateinit var et3: EditText
    private lateinit var et4: EditText
    private lateinit var et5: EditText
    private lateinit var et6: EditText


    private lateinit var OTP: String
    private lateinit var resendToken: PhoneAuthProvider.ForceResendingToken
    private lateinit var phoneNumber: String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityOtpactivityBinding.inflate(layoutInflater)
        setContentView(binding.root)

        OTP = intent.getStringExtra("OTP").toString()
        resendToken = intent.getParcelableExtra("resendToken")!!
        phoneNumber = intent.getStringExtra("phoneNumber")!!

        init()
//        progressBar.visibility = View.INVISIBLE
        utils.hideDialog()
        addTextChangeListener()
        resendOTPTvVisibility()

        resendTV.setOnClickListener {
            resendVerificationCode()
            resendOTPTvVisibility()
        }

        continuee.setOnClickListener {
            //collect otp from all the edit texts
            val typedOTP =
                (et1.text.toString() + et2.text.toString() + et3.text.toString()
                        + et4.text.toString() + et5.text.toString() + et6.text.toString())

            if (typedOTP.isNotEmpty()) {
                if (typedOTP.length == 6) {
                    val credential: PhoneAuthCredential = PhoneAuthProvider.getCredential(
                        OTP, typedOTP
                    )
//                    progressBar.visibility = View.VISIBLE
                    utils.showDialog(this@OTPActivity,"Verfying OTP")
                    signInWithPhoneAuthCredential(credential)
                } else {
                    Toast.makeText(this, "Please Enter Correct OTP", Toast.LENGTH_SHORT).show()
                }
            } else {
                Toast.makeText(this, "Please Enter OTP", Toast.LENGTH_SHORT).show()
            }


        }
    }

    private fun resendOTPTvVisibility() {
        et1.setText("")
        et2.setText("")
        et3.setText("")
        et4.setText("")
        et5.setText("")
        et6.setText("")
        resendTV.visibility = View.INVISIBLE
        resendTV.isEnabled = false

        android.os.Handler(Looper.myLooper()!!).postDelayed(Runnable {
            resendTV.visibility = View.VISIBLE
            resendTV.isEnabled = true
        }, 60000)
    }

    private fun resendVerificationCode() {
        val options = PhoneAuthOptions.newBuilder(auth)
            .setPhoneNumber(phoneNumber)       // Phone number to verify
            .setTimeout(60L, TimeUnit.SECONDS) // Timeout and unit
            .setActivity(this)                 // Activity (for callback binding)
            .setCallbacks(callbacks)
            .setForceResendingToken(resendToken)// OnVerificationStateChangedCallbacks
            .build()
        PhoneAuthProvider.verifyPhoneNumber(options)
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
//            progressBar.visibility = View.VISIBLE
            utils.showDialog(this@OTPActivity, "Something went wrong")
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
            OTP = verificationId
            resendToken = token
        }
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
                utils.showDialog(this@OTPActivity, "Verifying OTP")
//                progressBar.visibility = View.VISIBLE
            }
    }

    private fun sendToMain() {
        startActivity(Intent(this, MainActivity::class.java))
    }

    private fun addTextChangeListener() {
        et1.addTextChangedListener(EditTextWatcher(et1))
        et2.addTextChangedListener(EditTextWatcher(et2))
        et3.addTextChangedListener(EditTextWatcher(et3))
        et4.addTextChangedListener(EditTextWatcher(et4))
        et5.addTextChangedListener(EditTextWatcher(et5))
        et6.addTextChangedListener(EditTextWatcher(et6))
    }

    private fun init() {
        auth = FirebaseAuth.getInstance()
//        progressBar = findViewById(R.id.otpProgressBar)
        continuee= findViewById(R.id.continuee)
        resendTV = findViewById(R.id.resendTV)
        et1 = findViewById(R.id.etotp1)
        et2 = findViewById(R.id.etotp2)
        et3 = findViewById(R.id.etotp3)
        et4 = findViewById(R.id.etotp4)
        et5 = findViewById(R.id.etotp5)
        et6 = findViewById(R.id.etotp6)
    }


    inner class EditTextWatcher(private val view: View) : TextWatcher {
        override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {

        }

        override fun onTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {

        }

        override fun afterTextChanged(p0: Editable?) {

            val text = p0.toString()
            when (view.id) {
                R.id.etotp1 -> if (text.length == 1) et1.requestFocus()
                R.id.etotp2 -> if (text.length == 1) et2.requestFocus() else if (text.isEmpty()) et1.requestFocus()
                R.id.etotp3 -> if (text.length == 1) et4.requestFocus() else if (text.isEmpty()) et2.requestFocus()
                R.id.etotp4 -> if (text.length == 1) et5.requestFocus() else if (text.isEmpty()) et3.requestFocus()
                R.id.etotp5-> if (text.length == 1) et6.requestFocus() else if (text.isEmpty()) et4.requestFocus()
                R.id.etotp6 -> if (text.isEmpty()) et5.requestFocus()

            }
        }

    }
}