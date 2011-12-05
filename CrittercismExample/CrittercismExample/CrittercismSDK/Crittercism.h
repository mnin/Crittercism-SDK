//
//  Crittercism.h
//  CrittercismLib
//
//  Created by Robert Kwok on 8/15/10.
//  Copyright 2010 Crittercism Corp. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "CrittercismJSONKit.h"
#import <QuartzCore/QuartzCore.h>
#import "CrittercismReachability.h"
//#import "<CoreLocation/CoreLocation.h>"

@protocol CrittercismDelegate <NSObject>

@required
-(void) crittercismDidCrashOnLastLoad;
@end

@interface Crittercism : NSObject {
	NSMutableData *responseData;
	CFMutableDictionaryRef *connectionToInfoMapping;
	id <CrittercismDelegate> delegate;
    BOOL didCrashOnLastLoad;
}

@property(retain) id <CrittercismDelegate> delegate;
@property(assign) BOOL didCrashOnLastLoad;

+ (Crittercism*)sharedInstance;
+ (void) initWithAppID:(NSString *)_app_id andKey:(NSString *)_keyStr andSecret:(NSString *)_secretStr;
+ (void) initWithAppID:(NSString *)_app_id andKey:(NSString *)_keyStr andSecret:(NSString *)_secretStr andMainViewController:(UIViewController *)_mainViewController;
+ (NSString *) getAppID;
+ (NSString *) getKey;
+ (NSString *) getSecret;
+ (void) configurePushNotification:(NSData *) deviceToken;
+ (void) setAge:(int)age;
+ (void) setGender:(NSString *)gender;
+ (void) setUsername:(NSString *)username;
+ (void) setEmail:(NSString *)email;
+ (void) setValue:(NSString *)value forKey:(NSString *)key;
+ (int) getCurrentOrientation;
+ (void) setCurrentOrientation: (int)_orientation;
+ (void) logEvent:(NSString *)_eventName andEventDict:(NSDictionary *)_dict;
+ (void) leaveBreadcrumb:(NSString *)breadcrumb;

// Server methods
-(void) appLoadedWithLaunch:(BOOL)isAppLaunch;
-(void) updateDeviceToken:(NSData *)deviceToken;
@end
