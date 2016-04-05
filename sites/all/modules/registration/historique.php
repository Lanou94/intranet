<html>


<?php


try
{
	$bdd = new PDO('mysql:host=localhost;dbname=intranet_accor_hotels_arena;charset=utf8', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	$bdd->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);

	
	
	}
catch (Exception $e)
{
        die('Errrreur : ' . $e->getMessage("erreur"));
}


$historique=$bdd->query("SELECT user_uid,state,count, SUM(count) AS sumhisto FROM registration GROUP BY user_uid");
$result = $historique->fetchAll();
foreach($result as $results){
	
	echo $results['user_uid'];
	$user_id=$results['user_uid'];
	echo '-';
	echo $results['sumhisto'];
	$histo=$results['sumhisto'];
	echo '-';
	echo $results['state'];
	$state=$results['state'];
	echo '-';
	echo $results['count'];
	$count=$results['count'];
	echo '<br />';
	if($state=='canceled'){
		
		$histo=$histo-$count;
		$bdd->query("UPDATE registration SET historique='$histo' WHERE user_uid='$user_id'");
	}
	else
	$bdd->query("UPDATE registration SET historique='$histo' WHERE user_uid='$user_id'");
	
							}


?>
</html>