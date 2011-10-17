//
//  CrittercismCrash.h
//  CrittercismLib
//
//  Created by Kevin Su on 7/20/11.
//  Copyright (c) 2011 Crittercism. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreData/CoreData.h>


@interface CrittercismCrash : NSManagedObject {
@private
}
@property (nonatomic, retain) NSNumber * date;
@property (nonatomic, retain) NSData * stacktrace;
@property (nonatomic, retain) NSData * state;
@property (nonatomic, retain) NSString * name;
@property (nonatomic, retain) NSString * reason;

@end
