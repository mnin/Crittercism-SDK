//
//  Crittercism.h
//  CrittercismLib
//
//  Created by Robert Kwok on 8/15/10.
//  Copyright 2010 Crittercism Corp. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "CrittercismJSON/CrittercismJSONKit.h"
#import <QuartzCore/QuartzCore.h>
#import "CrittercismReachability.h"
#import <CoreData/CoreData.h>
#import "CrittercismCrash.h"
//#import "<CoreLocation/CoreLocation.h>"

@class CrittercismViewController;

@protocol CrittercismDelegate <NSObject>

@required
// Method that is called when user clicks the close button to close the crittercism modal view
-(void) crittercismDidClose;
-(void) crittercismDidCrashOnLastLoad;
@end



@interface Crittercism : NSObject {
    NSManagedObjectModel *managedObjectModel;
    NSManagedObjectContext *managedObjectContext;
    NSPersistentStoreCoordinator *persistentStoreCoordinator;

	NSMutableData *responseData;
	NSObject *voteDisplayer;
	CrittercismViewController *crittercismViewController;
	NSArray *feedbackArray;
	CFMutableDictionaryRef *connectionToInfoMapping;
	id <CrittercismDelegate> delegate;    
    BOOL didCrashOnLastLoad;
}

@property(nonatomic, retain, readonly) NSManagedObjectModel *managedObjectModel;
@property(nonatomic, retain, readonly) NSManagedObjectContext *managedObjectContext;
@property(nonatomic, retain, readonly) NSPersistentStoreCoordinator *persistentStoreCoordinator;

@property(retain) id <CrittercismDelegate> delegate;
@property(nonatomic, retain) CrittercismViewController *crittercismViewController;
@property(nonatomic, retain) NSObject *voteDisplayer;
@property(retain) NSArray *feedbackArray;
@property(assign) BOOL didCrashOnLastLoad;

+ (Crittercism*)sharedInstance;
+ (void)initWithAppID:(NSString *)_app_id andKey:(NSString *)_keyStr andSecret:(NSString *)_secretStr andMainViewController:(UIViewController *)_mainView;
+ (void)showCrittercism;
+ (void)showCrittercism:(UIViewController *)_mainViewController;
+ (NSString *)getAppID;
+ (NSString *)getKey;
+ (NSString *)getSecret;
+ (void)configurePushNotification:(NSData *) deviceToken;
+ (void)setAge:(int)age;
+ (void)setGender:(NSString *)gender;
+ (void)setUsername:(NSString *)username;
+ (void)setEmail:(NSString *)email;
+ (void)setValue:(NSString *)value forKey:(NSString *)key;
+ (int) getCurrentOrientation;
+ (void) setCurrentOrientation: (int)_orientation;
+ (void) logEvent:(NSString *)_eventName andEventDict:(NSDictionary *)_dict;
+ (void) leaveBreadcrumb:(NSString *)breadcrumb;

-(NSString *)applicationDocumentsDirectory;
-(CrittercismViewController *) getCrittercism;
-(UIViewController *) getMainViewController;
-(void) setTintRed:(float) _red green:(float)_green blue:(float)_blue;
-(void) hideCrittercism;
-(void) setDisplayer:(NSObject *)_displayer;
-(void) updateVotes;
-(void) addVote:(NSString *)_eventName;
-(void) addVote;
-(int) getVotes;
-(void) setVotes:(int) _numVotes;
-(void) setNavTitle:(NSString *)_title;
-(NSString *) getNavTitle;
-(void) addGradient:(UIButton *) _button;

// Server methods
-(void) appLoadedWithLaunch:(BOOL)isAppLaunch;
-(void) useVote:(NSString *)_feedback_id andThumbsUp:(int)isUp;
-(void) sendToServer:(NSString *)_requestString andURL:(NSString *)_url andDelegate:(NSObject *)_delegate withDetailedDiagnostics:(BOOL)withDetailedDiagnostics;
-(void) addComment:(NSString *)_commentText andFeedbackID:(NSString *)_feedbackID andParentID:(NSString *)_parentID;
-(void) updateData:(BOOL)isRefreshOnly;
-(void) updateDeviceToken:(NSData *)deviceToken;
@end
