#!/bin/bash
echo '/'
curl -X GET localhost:3300/
echo

echo "Add respondent"
curl -X PUT localhost:3300/e0123456789012345678902234678899/e0364789ad758589690f758589c686bb/respondent/ng/male
echo

echo "Respondent random"
curl -X PUT localhost:3300/e0123456789012345678902234678899/e0364789ad758589690f758589c686bb/random_numbers/10/100
echo

echo "Respondent Pref"
curl -X PUT localhost:3300/e0123456789012345678902234678899/e0364789ad758589690f758589c686bb/pref_dob/10/red/2001/10/1
echo

echo "Respondent final"
curl -X PUT localhost:3300/e0123456789012345678902234678899/e0364789ad758589690f758589c686bb/bias_rnd/10/100/true
echo
