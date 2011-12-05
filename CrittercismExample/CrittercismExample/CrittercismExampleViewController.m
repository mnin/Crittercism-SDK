//
//  CrittercismExampleViewController.m
//  CrittercismExample
//
//  Created by Robert Kwok on 6/17/11.
//  Copyright 2011 Crittercism. All rights reserved.
//

#import "CrittercismExampleViewController.h"

@implementation CrittercismExampleViewController

- (void)dealloc
{
    [super dealloc];
}

-(IBAction) feedbackHit:(id) sender {
    UIAlertView *alert = [[UIAlertView alloc] init];
    [alert setTitle:@"No Feedback Forum in this SDK"];
    [alert setMessage:@"This thin SDK does not include the feedback forum"];
    [alert setDelegate:nil];
    [alert addButtonWithTitle:@"Ok"];
    [alert show];
    [alert release];  
//    [Crittercism showCrittercism];
}
-(IBAction) leaveBreadcrumbPressed:(id) sender {
    [Crittercism leaveBreadcrumb:@"Breadcrumb Button Pressed!"];
}
-(IBAction) crashHit:(id) sender {
    [NSException raise:@"Test Breadcrumbs" format:@"It works!"];
//    [NSException raise:@"da da da da dada dada" format:@"can't touch this"];
//    [self throwSignal];
}

-(void) throwSignal {
    int i = 12345;
    NSLog( @"%@", i );
}

-(IBAction) viewDataHit:(id) sender {
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"https://www.crittercism.com/developers/demo"]];
}


- (void)didReceiveMemoryWarning
{
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle


// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad
{
    [Crittercism leaveBreadcrumb:@"ExampleViewController Loaded"];
    [super viewDidLoad];
}


- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

#pragma mark CrittercismDelegate
-(void)crittercismDidCrashOnLastLoad {
    [Crittercism leaveBreadcrumb:@"App crashed the last time it was loaded"];
    NSLog(@"App crashed the last time it was loaded");
}

@end
