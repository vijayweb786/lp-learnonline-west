<?php

$data = $_POST;
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$university = $data['university'];
$source = "Chat";

$campaign = $data['campaign_name'];
$utm_medium = $data['utm_medium'];
//echo "<pre>";print_r($data);
echo $data_string = '[{"Attribute":"FirstName","Value":"'.$name.'"},{"Attribute":"mx_University","Value":"'.$university.'"},{"Attribute":"Phone","Value":"'.$phone.'"},{"Attribute":"EmailAddress","Value":"'.$email.'"},{"Attribute":"mx_Region","Value":""},{"Attribute":"mx_Stream","Value":""},{"Attribute":"SearchBy","Value":"'.$phone.'"},{"Attribute":"Source","Value":"Chatbot"},{"Attribute":"SourceCampaign","Value":"'.$campaign.'"},{"Attribute":"SourceMedium","Value":"'.$utm_medium.'"}]';


$header=array("Content-Type:application/json");
        if(!empty($header)&&isset($_POST["ad_key"])&&!empty($_POST["ad_key"])){
            foreach ($_POST["ad_key"] as $key => $value) {
                if(!empty($value)&&!empty($_POST["ad_value"][$key]))
                $header[]= $value.$colan.$_POST["ad_value"][$key];
            }
        }
try
{
$curl = curl_init('https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$rc685df5f2631db355eaa89c56b7b823a&secretKey=f04dba47d3596a3aca8603255460d366678f6279');
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_HTTPHEADER,$header);
$json_response = curl_exec($curl);
echo $json_response;exit;
    curl_close($curl);
} catch (Exception $ex) {
    curl_close($curl);
}
 ?>