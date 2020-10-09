/*******************************************************************/
/*                                                                 */
/*                      ADOBE CONFIDENTIAL                         */
/*                   _ _ _ _ _ _ _ _ _ _ _ _ _                     */
/*                                                                 */
/* Copyright 2020 Adobe Systems Incorporated                       */
/* All Rights Reserved.                                            */
/*                                                                 */
/* NOTICE:  All information contained herein is, and remains the   */
/* property of Adobe Systems Incorporated and its suppliers, if    */
/* any.  The intellectual and technical concepts contained         */
/* herein are proprietary to Adobe Systems Incorporated and its    */
/* suppliers and may be covered by U.S. and Foreign Patents,       */
/* patents in process, and are protected by trade secret or        */
/* copyright law.  Dissemination of this information or            */
/* reproduction of this material is strictly forbidden unless      */
/* prior written permission is obtained from Adobe Systems         */
/* Incorporated.                                                   */
/*                                                                 */
/*******************************************************************/
/**
 *	\file PIUXPSuite.h
 *
 *	\brief This file contains the public definitions and structures
 *         used by plug-ins wishing to communicate with UXP based Plugins.
 *
 *	Distribution:
 *		PUBLIC
 *
 *	\details
 *		This suite contains public API and declarations relating to interaction
 *      with UXP plugins.
 */

#ifndef PIUXPSuite_h
#define PIUXPSuite_h

#if PRAGMA_ONCE
#pragma once
#endif

#include "PIActions.h"
#include "SPTypes.h"
#include "SPPlugs.h"

#ifdef __cplusplus
extern "C" {
#endif

/******************************************************************************/

/// Unique identifier for the UXP Suite.
#define kPSUXPSuite 			"Photoshop UXP Suite for Plug-ins"

/******************************************************************************/

#define kPSUXPSuiteVersion1			1	/**< UXP Suite version 1  */

/******************************************************************************/

typedef void (*PIUXPMessageNotifier)(PIActionDescriptor descriptor);

/**
* The set of routines available in the UXP Suite.
*/
typedef struct PsUXPSuite1
{
    SPAPI SPErr (*SendUXPMessage) (SPPluginRef selfRef, const char* uxpPluginId, PIActionDescriptor descriptor);
    
    SPAPI SPErr (*AddUXPMessageListener) (SPPluginRef selfRef, PIUXPMessageNotifier notifier);
    
    SPAPI SPErr (*RemoveUXPMessageListener) (SPPluginRef selfRef);

} PsUXPSuite1;


#ifdef __cplusplus
}
#endif

#endif /* PIUXPSuite_h */
