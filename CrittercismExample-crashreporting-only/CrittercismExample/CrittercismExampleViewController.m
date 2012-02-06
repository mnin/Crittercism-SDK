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
    [alert setTitle:@"Forum Not In This SDK"];
    [alert setMessage:@"Alas, the support is not in this SDK.  Visit the Downloads Page to get the full SDK!"];
    [alert setDelegate:nil];
    [alert addButtonWithTitle:@"Ok"];
    [alert show];
    [alert release];  
}
-(IBAction) earnVoteHit:(id) sender {
    [[Crittercism sharedInstance] addVote];    
}
-(IBAction) crashHit:(id) sender {
    [NSException raise:@"test" format:@"test crash 2.9.37 crash only"];
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

/*
// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad
{
    [super viewDidLoad];
}
*/

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
    NSLog(@"App crashed the last time it was loaded");
}

-(void) crittercismDidClose {
    NSLog(@"Crittercism forum was closed, resume game");
}

@end
