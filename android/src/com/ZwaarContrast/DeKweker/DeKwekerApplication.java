package com.ZwaarContrast.DeKweker;

import com.urbanairship.AirshipConfigOptions;
import com.urbanairship.Logger;
import com.urbanairship.UAirship;
import com.urbanairship.push.PushManager;
import com.urbanairship.push.PushPreferences;

import android.app.Application;
 
public class DeKwekerApplication extends Application {
 
    @Override
    public void onCreate() {
        //Load options
    	AirshipConfigOptions options = AirshipConfigOptions.loadDefaultOptions(this);
    	
        //Set options to enable push notifications
        options.transport = "helium";
		options.developmentAppKey = "_7UGKHwnQ2eKFLNNy_pgxw";
		options.developmentAppSecret = "C5n_fo9fQXixZWPVCGJqRg";
		options.productionAppKey = "5wioYYXrS3eykPlh-dxwPg";
		options.productionAppSecret = "C2czYq-wQIqUpQKuQF8i-A";
		options.inProduction = true;
        
        //Up up and away
        UAirship.takeOff(this,options);
 
        //Enable push
        PushManager.enablePush();
        
        //Get APID
        PushPreferences prefs = PushManager.shared().getPreferences();
        Logger.info("My Application onCreate - App APID: " + prefs.getPushId());
    }
 
}