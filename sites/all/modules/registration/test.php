<?php

/**
* Implementation of hook_action_info().
*/
function user_action_info() {
  return array(
    'user_block_user_action' => array(
      'description' => t('Block current user'),
      'type' => 'user',
      'configurable' => FALSE,
      'hooks' => array(
        'nodeapi' => array('presave', 'delete', 'insert', 'update', 'view'),
        'comment' => array('view', 'insert', 'update', 'delete'),
        'user' => array('logout'),
        ),
      ),
    'user_block_ip_action' => array(
      'description' => t('Ban IP address of current user'),
      'type' => 'user',
      'configurable' => FALSE,
      'hooks' => array(
        'nodeapi' => array('presave', 'delete', 'insert', 'update', 'view'),
        'comment' => array('view', 'insert', 'update', 'delete'),
        'user' => array('logout'),
      )
    ),
  );
}

stdClass Object
(
    [uid] => 
    [name] => 
    [pass] => 
    [mail] => 
    [mode] => 0
    [sort] => 0
    [threshold] => 0
    [theme] => 
    [signature] => 
    [signature_format] => 0
    [created] => 1268923269
    [access] => 1279119654
    [login] => 1278690259
    [status] => 1
    [timezone] => -18000
    [language] => 
    [picture] => 
    [init] => 
    [data] => a:3:{s:18:"admin_compact_mode";b:0;s:5:"block";a:1:{s:5:"views";a:1:{s:13:"Users-block_1";i:1;}}s:13:"form_build_id";s:37:"form-f7c8717b2298f8883cb5a3b46bfc12f8";}
    [sid] => b23b8gii6mcqftfft240di35d7
    [hostname] => 0.0.0.0
    [timestamp] => 1279119654
    [cache] => 0
    [session] => views|N;user_overview_filter|a:0:{}dblog_overview_filter|a:0:{}messages|a:1:{s:6:"status";a:1:{i:0;s:15:"Caches cleared.";}}
    [admin_compact_mode] => 
    [block] => Array
        (
            [views] => Array
                (
                    [Users-block_1] => 1
                )

        )

    [form_build_id] => form-f7c8717b2298f8883cb5a3b46bfc12f8
    [roles] => Array
        (
            [rid] => name
        )

)
?>