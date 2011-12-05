//
//  CrittercismExampleViewController.h
//  CrittercismExample
//
//  Created by Robert Kwok on 6/17/11.
//  Copyright 2011 Crittercism. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Crittercism.h"

@interface CrittercismExampleViewController : UIViewController <CrittercismDelegate>{
    
}

-(void) throwSignal;

-(IBAction) feedbackHit:(id) sender;
-(IBAction) leaveBreadcrumbPressed:(id) sender;
-(IBAction) crashHit:(id) sender;

-(IBAction) viewDataHit:(id) sender;

@end
