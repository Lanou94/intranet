<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=intranet_accor_hotels_arena;charset=utf8', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	$bdd->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);

	
	
	}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage("erreur"));
}

SELECT SUM(count)FROM registration WHERE user_uid=33 AND state='complete' ;




?>
