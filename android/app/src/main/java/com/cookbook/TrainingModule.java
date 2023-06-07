package com.cookbook;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TrainingModule extends ReactContextBaseJavaModule {

    public TrainingModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return getClass().getSimpleName();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getDate(String format/*, Callback callback*/) {
        SimpleDateFormat formatter = new SimpleDateFormat(format);
        Date date = new Date();
        String result = formatter.format(date);
        ///callback.invoke(result);
        return result;
    }

}
