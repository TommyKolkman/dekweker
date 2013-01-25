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
    	AirshipConfigOptions options = AirshipConfigOptions.loadDefaultOptions(this);
    	options.transport = "helium";
    			options.developmentAppKey = "_7UGKHwnQ2eKFLNNy_pgxw";
    			options.developmentAppSecret = "C5n_fo9fQXixZWPVCGJqRg";
    			options.productionAppKey = "";
    			options.productionAppSecret = "";
    			options.inProduction = false;
        UAirship.takeOff(this,options);
 
        PushManager.enablePush();
        

        PushPreferences prefs = PushManager.shared().getPreferences();
        Logger.info("My Application onCreate - App APID: " + prefs.getPushId());
    }
 
}