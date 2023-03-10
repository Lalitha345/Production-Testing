/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define([],
    
    () => {

        /**
         * Defines the Scheduled script trigger point.
         * @param {Object} scriptContext
         * @param {string} scriptContext.type - Script execution context. Use values from the scriptContext.InvocationType enum.
         * @since 2015.2
         */
        const execute = (scriptContext) => {
            try{
                //Changes made in prod
               log.debug("Entered in schedule script")
                }catch(e){
                    log.debug(e.name,e.message)
                }
        }

        return {execute}

    });
