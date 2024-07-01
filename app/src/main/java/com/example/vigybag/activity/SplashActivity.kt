package com.example.vigybag.activity

import android.content.Intent
import android.os.Bundle
import android.os.Looper
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.vigybag.databinding.ActivitySplashBinding
import java.util.logging.Handler

class SplashActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySplashBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySplashBinding.inflate(layoutInflater)
        setContentView(binding.root)


       android.os.Handler(Looper.getMainLooper()).postDelayed({
                 startActivity(Intent(this@SplashActivity, SignUpActivity::class.java))
        }, 100)

    }
}