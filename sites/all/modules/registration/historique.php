<html>


<?php
session_start;
$user_id=$_SESSION['user_uid'];
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=intranet_accor_hotels_arena;charset=utf8', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
	$bdd->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);

	
	
	}
catch (Exception $e)
{
        die('Errrreur : ' . $e->getMessage("erreur"));
}



				
				//Récupere tous les id et leur max
				$historique=$bdd->query("SELECT MAX(historique) AS maxhisto FROM registration WHERE user_uid=$user_uid ");
				$result = $historique->fetchAll();
					$_SESSION['user_uid']=$user_uid;
				foreach($result as $results){
				//Insertion de l'id et du max 
				
			
				// echo $results['user_uid'];
				// $user_id=$results['user_uid'];
				// echo '-';
				echo $results['maxhisto'];
				$max_histo=$results['maxhisto'];
				echo '<br />';
				$historique=$bdd->query("SELECT state FROM registration WHERE registration_id=$registration->registration_id");
				$result = $historique->fetch();
				$state=$result['state'];
				echo $state;
				// echo '-';
				// echo $results['state'];
				// $etat=$results['state'];
				// echo '-';
				// echo $results['count'];
				// $nbr=$results['count'];
				// echo '-';
				// echo $results['entity_id'];
				// $entit=$results['entity_id'];
				
				echo '<br />///';
			
				echo '<br />';
				
						 if($state=='pending' ){
						unset($_SESSION['compteur_canceled']);
						unset($_SESSION['compteur_complete']);
							
					}
					
					if($state=='canceled' ){
							if(!isset ($SESSION['compteur_canceled'])){
							$SESSION['compteur_canceled']=0;
							$max_histo=$max_histo-$count;
							if($max_histo<0){
								$max_histo=0;
							}
							
							$bdd->query("UPDATE registration SET historique='$max_histo' WHERE user_uid='$user_uid'");
							unset($_SESSION['compteur_complete']);
					}
					}
					
					
					 if($state=='complete' ){
						if(!isset ($SESSION['compteur_complete'])){
							$SESSION['compteur_complete']=0;
							$max_histo=$max_histo+$count;
							
							$bdd->query("UPDATE registration SET historique='$max_histo' WHERE user_uid='$user_uid'");
							unset($_SESSION['compteur_canceled']);
							
					}
					}
				
		}

				$historique=$bdd->query("SELECT historique FROM registration WHERE registration_id=$registration->registration_id");
				$result = $historique->fetch();
				
		if($state=='canceled')$state='Refuser';
		else if($state=='pending')$state='En attente';
		else if($state=='complete')$state='Valider';
		
		
?>
</html>