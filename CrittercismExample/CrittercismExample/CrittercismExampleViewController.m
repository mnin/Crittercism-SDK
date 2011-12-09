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
    [Crittercism showCrittercism];
}
-(IBAction) leaveBreadcrumbPressed:(id) sender {
    [Crittercism leaveBreadcrumb:@"Breadcrumb Button Pressed!"];
}

-(IBAction) attachMetadataHit:(id) sender {
    [Crittercism setValue:@"5" forKey:@"Game Level"];
}

-(IBAction) crashHit:(id) sender {

    [NSException raise:@"awesome version 3.0.4 crash" format:@"now with forum support!"];
    
//    [NSException raise:@"Test Breadcrumbs" format:@"It works!"];
//    [NSException raise:@"da da da da dada dada" format:@"can't touch this"];
//    [self throwSignal];
}

-(void) throwSignal {
    int i = 12345;
    NSLog( @"%@", i );
}

-(IBAction) critterHit:(id) sender {
    [Crittercism leaveBreadcrumb:@"Critter is Hit!"];
    
    UIAlertView *alert = [[UIAlertView alloc] init];
    [alert setTitle:@"Hey that tickles!"];
    [alert setMessage:@"Do you love me?"];
    [alert setDelegate:self];
    [alert addButtonWithTitle:@"Yes"];
    [alert addButtonWithTitle:@"No"];
    [alert show];
    [alert release];  
}

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex
{
	if (buttonIndex == 0)
	{
        [Crittercism leaveBreadcrumb:@"I am loved!"];
	}
	else if (buttonIndex == 1)
	{
        [Crittercism leaveBreadcrumb:@"True love found somewhere else :("];
	}
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
//    [Crittercism leaveBreadcrumb:@"ExampleViewController Loaded"];
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
