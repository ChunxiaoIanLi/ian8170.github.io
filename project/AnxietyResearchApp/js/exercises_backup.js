var exercise_1="";
exercise_1 += "            <h2>Exercise 1: Top Feared Social Situations<\/h2>";
exercise_1 += "            <p>";
exercise_1 += "                Being as specific as possible, describe three social situations that are most fearful or problematic in your life.This could include:";
exercise_1 += "                <br>";
exercise_1 += "                <br>";
exercise_1 += "                <b>Social Situations<\/b> (e.g. any kind of small talk, especially with strangers; asking for help; introducing myself to a people)";
exercise_1 += "                <br>";
exercise_1 += "                <br>";
exercise_1 += "                <b>Being Observed by Others<\/b> ";
exercise_1 += "                (e.g. walking into a crowded room; waiting in line; eating, drinking, or writing in front of others)";
exercise_1 += "                <br>";
exercise_1 += "                <br>";
exercise_1 += "                <b>Performing in Front of Others<\/b> (e.g. speaking up in a class discussion, or giving a presentation; being interviewed for a job)";
exercise_1 += "            <\/p>";
exercise_1 += "                <center><h3>Top 3 Feared Social Situations<\/h3><\/center>";
exercise_1 += "<form name=\"exercise_1\" id=\"exercise_1\" onsubmit=\"alert(\"testing\");\" >";
exercise_1 += "                    <table border=\"0\">";
exercise_1 += "                        <tr>";
exercise_1 += "                            <td style=\"width:100%\">";
exercise_1 += "                                <textarea rows='1' name='fear_1' placeholder='1.' onchange='submitExcerise_1()'></textarea>";// <input type='text' name='fear_1' placeholder='1.' onchange='submitExcerise_1()'\/> ";
exercise_1 += "                            <\/td>";
exercise_1 += "                            <td>";
exercise_1 += "                                <div id='fear_1_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_1 += "                            <\/td>";
exercise_1 += "                        <\/tr>";
exercise_1 += "                        <tr>";
exercise_1 += "                            <td style=\"width:100%;\">";
exercise_1 += "                                <textarea name='fear_2' placeholder='2.' onchange='submitExcerise_1()'\/></textarea>";
exercise_1 += "                            <\/td>";
exercise_1 += "                            <td>";
exercise_1 += "                                <div id='fear_2_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_1 += "                            <\/td>";
exercise_1 += "                        <\/tr>";
exercise_1 += "                        <tr>";
exercise_1 += "                            <td style=\"width:100%;\">";
exercise_1 += "                                <textarea name='fear_3' placeholder='3.' onchange='submitExcerise_1()'\/></textarea>";
exercise_1 += "                            <\/td>";
exercise_1 += "                            <td>";
exercise_1 += "                                <div id='fear_3_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_1 += "                            <\/td>";
exercise_1 += "                        <\/tr>";
exercise_1 += "                        ";
exercise_1 += "                        ";
exercise_1 += "                    <\/table>";
exercise_1 += "                <\/form>";

function submitExcerise_1() {
    var exercise_1 = {};
    for (var i = 1; i <= 3; i++) {
        if (document.forms["exercise_1"]["fear_"+i].value.length>0) {
            exercise_1["fear_"+i] = document.forms["exercise_1"]["fear_"+i].value;
            $('#fear_'+i+'_check').css('visibility','visible');
        } else {
            exercise_1["fear_"+i] = "";
            $('#fear_'+i+'_check').css('visibility','hidden');
        }
    }
    localStorage.setItem('exercise_1', JSON.stringify(exercise_1)); 
    if (document.forms["exercise_2"]) {loadExercise_2();}
                         
}

function loadExercise_1() {
	if (localStorage['exercise_1']) {
	    var exercise_1 = JSON.parse(localStorage['exercise_1']);
	    for (var i = 1; i <= 3; i++) {
	        if (exercise_1['fear_'+i].length>0) {
	            document.forms["exercise_1"]["fear_"+i].value = exercise_1['fear_'+i];
	            $('#fear_'+i+'_check').css('visibility','visible');
	        }
	    }
	}
}


var exercise_2="";
exercise_2 += "<h2>Exercise 2: Your Anxious Thoughts<\/h2>";
exercise_2 += "            <p>";
exercise_2 += "                List some of the thoughts that typically show up in each of your top three feared social situations (from <b>Exercise 1<\/b>).";
exercise_2 += "            <\/p>";
exercise_2 += "";
exercise_2 += "            <form name=\"exercise_2\" id='exercise_2'>";
exercise_2 += "                <table border=\"0\">";
exercise_2 += "                    <\/label>";
exercise_2 += "                    <tr>";
exercise_2 += "                        <td>";
exercise_2 += "                            <center><b>Feared Situation<\/b><\/center>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <center><b>Anxious Thoughts<\/b><\/center>";
exercise_2 += "                        <\/td>";
exercise_2 += "                    <\/tr>";
exercise_2 += "                    <tr>";
exercise_2 += "                        <td>";
exercise_2 += "                            <textarea name='fear_1' id='fear_1' placeholder='1.' onchange='submitExcerise_2()'\/></textarea>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <textarea name='thought_1' onchange='submitExcerise_2()'\/></textarea>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <div id='e2_1_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_2 += "                        <\/td>";
exercise_2 += "                    <\/tr>";
exercise_2 += "                    <tr>";
exercise_2 += "                        <td>";
exercise_2 += "                            <textarea name='fear_2' placeholder='2.' onchange='submitExcerise_2()'\/></textarea>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <textarea name='thought_2' onchange='submitExcerise_2()'\/></textarea>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <div id='e2_2_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_2 += "                        <\/td>";
exercise_2 += "                    <\/tr>";
exercise_2 += "                    <tr>";
exercise_2 += "                        <td>";
exercise_2 += "                            <textarea name='fear_3' placeholder='3.' onchange='submitExcerise_2()'\/></textarea>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <textarea name='thought_3' onchange='submitExcerise_2()'\/></textarea>";
exercise_2 += "                        <\/td>";
exercise_2 += "                        <td>";
exercise_2 += "                            <div id='e2_3_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_2 += "                        <\/td>";
exercise_2 += "                    <\/tr>";
exercise_2 += "                <\/table>";
exercise_2 += "            <\/form>";


function loadExercise_2(){
    if (localStorage['exercise_1']) {
        console.log('st');
        var exercise_1 = JSON.parse(localStorage['exercise_1']);
        document.forms["exercise_2"]["fear_1"].value = exercise_1['fear_1'];
        document.forms["exercise_2"]["fear_2"].value = exercise_1['fear_2'];
        document.forms["exercise_2"]["fear_3"].value = exercise_1['fear_3'];
    }
    if (localStorage['exercise_2']) {
        var exercise_2 = JSON.parse(localStorage['exercise_2']);
        for (var i = 1; i <= 3; i++) {
            if (exercise_2['thought_'+i].length>0) {
                document.forms["exercise_2"]["thought_"+i].value = exercise_2['thought_'+i];
                $('#e2_'+i+'_check').css('visibility','visible');
            }
        }
    }
}
 
function submitExcerise_2() {
    var exercise_1 = {};
    for (var i = 1; i <= 3; i++) {
        if (document.forms["exercise_2"]["fear_"+i].value.length>0) {
            exercise_1["fear_"+i] = document.forms["exercise_2"]["fear_"+i].value;
        } else {
            console.log("empty");
            exercise_1["fear_"+i] = "";
        }
    }
    localStorage.setItem('exercise_1', JSON.stringify(exercise_1));
    var exercise_2 = {};
    for (var i = 1; i <= 3; i++) {
        if (document.forms["exercise_2"]["thought_"+i].value.length>0) {
            exercise_2["thought_"+i] = document.forms["exercise_2"]["thought_"+i].value;
            $('#e2_'+i+'_check').css('visibility','visible');
        } else {
            exercise_2["thought_"+i] = "";
            $('#e2_'+i+'_check').css('visibility','hidden');
        }
    }
    localStorage.setItem('exercise_2', JSON.stringify(exercise_2));
    loadExercise_1();             
}

var exercise_3="";
exercise_3 += "            <h2>Exercise 3: \"Shoulding\"<\/h2><p>Please check any of the following \"should\" phrases that sound familiar to you.</p>";
exercise_3 += "            <div data-role=\"fieldcontain\">";
exercise_3 += "                <fieldset data-role=\"controlgroup\">";
exercise_3 += "                    <input type=\"checkbox\" id=\"should_1\" onchange='submitExcerise_should()'\/>";
exercise_3 += "                    <label for=\"should_1\">I shouldn't appear anxious.<\/label>";
exercise_3 += "                    <input type=\"checkbox\" id=\"should_2\" onchange='submitExcerise_should()'\/>";
exercise_3 += "                    <label for=\"should_2\">I should be perfect.<\/label>";
exercise_3 += "                    <input type=\"checkbox\" id=\"should_3\" onchange='submitExcerise_should()'\/>";
exercise_3 += "                    <label for=\"should_3\">I shouldn't inconvenience others.<\/label>";
exercise_3 += "                    <input type=\"checkbox\" id=\"should_4\" onchange='submitExcerise_should()'\/>";
exercise_3 += "                    <label for=\"should_4\">I should always be in control. <\/label>";
exercise_3 += "                    <input type=\"checkbox\" id=\"should_5\" onchange='submitExcerise_should()'\/>";
exercise_3 += "                    <label for=\"should_5\">I should always be funny and charming.<\/label>";
exercise_3 += "                <\/fieldset>";
exercise_3 += "            <\/div>";

function loadExercise_3() {
    if (localStorage['exercise_3']) {
        var exercise_3 = JSON.parse(localStorage['exercise_3']);
        for (var i = 1; i<=5; i++) {
            if (exercise_3['should_'+i]) {
                $('#should_'+i).attr("checked",true)
            }
        }
    }   
}

function submitExcerise_should() {
    var exercise_3 = {};
    for (var i = 1; i <= 6; i++) {
        exercise_3["should_"+i] = $("#should_"+i).prop("checked");
    }
    localStorage.setItem('exercise_3', JSON.stringify(exercise_3));

}

var exercise_4="";
exercise_4 += "<h2>Exercise 4: Generating Stories<\/h2>";
exercise_4 += "            <p>";
exercise_4 += "                To get at some of your stories, complete the following phrases:.";
exercise_4 += "            <\/p>";
exercise_4 += "            <form id='exercise_4'>";
exercise_4 += "                <table border=\"0\">";
exercise_4 += "                    <tr>";
exercise_4 += "                        <td>";
exercise_4 += "                            <label for=\"story_1\"><b>In social situations I feel as if I am (for example, an imposter)<\/b> <\/label>";
exercise_4 += "                            <textarea type=\"text\" id=\"story_1\" value=\"\" placeholder='' onchange='submitExcerise_4()' \/></textarea>";
exercise_4 += "                        <\/td>";
exercise_4 += "                        <td>";
exercise_4 += "                            <div id='e4_1_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_4 += "                    <\/tr>";
exercise_4 += "                    <tr>";
exercise_4 += "                        <td>";
exercise_4 += "                            <label for=\"story_2\"><b>In social situations I am someone who always (for example, says the wrong thing)<\/b> <\/label>";
exercise_4 += "                            <textarea type=\"text\" id=\"story_2\" value=\"\" placeholder='' onchange='submitExcerise_4()' \/></textarea>";
exercise_4 += "                        <\/td>";
exercise_4 += "                        <td>";
exercise_4 += "                            <div id='e4_2_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_4 += "                    <\/tr>";
exercise_4 += "                    <tr>";
exercise_4 += "                        <td>";
exercise_4 += "                            <label for=\"story_3\"><b>In social situations I am someone who can't (for example, do small talk)<\/b> <\/label>";
exercise_4 += "                            <textarea type=\"text\" id=\"story_3\" value=\"\" placeholder='' onchange='submitExcerise_4()' \/></textarea>";
exercise_4 += "                        <\/td>";
exercise_4 += "                        <td>";
exercise_4 += "                            <div id='e4_3_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_4 += "                    <\/tr>";
exercise_4 += "                    <tr>";
exercise_4 += "                        <td>";
exercise_4 += "                            <label for=\"story_4\"><b>In social situations my best attribute is (for example, being the listener)<\/b> <\/label>";
exercise_4 += "                            <textarea type=\"text\" id=\"story_4\" value=\"\" placeholder='' onchange='submitExcerise_4()' \/></textarea>";
exercise_4 += "                        <\/td>";
exercise_4 += "                        <td>";
exercise_4 += "                            <div id='e4_4_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_4 += "                    <\/tr>";
exercise_4 += "                    <tr>";
exercise_4 += "                        <td>";
exercise_4 += "                            <label for=\"story_5\"><b>In social situations my worst attribute is (for example, being the listener)<\/b> <\/label>";
exercise_4 += "                            <textarea type=\"text\" id=\"story_5\" value=\"\" placeholder='' onchange='submitExcerise_4()' \/></textarea>";
exercise_4 += "                        <\/td>";
exercise_4 += "                        <td>";
exercise_4 += "                            <div id='e4_5_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_4 += "                    <\/tr>";
exercise_4 += "                    <tr>";
exercise_4 += "                        <td>";
exercise_4 += "                            <label for=\"story_6\"><b>Record any other stories your mind generates:<\/b> <\/label>";
exercise_4 += "                            <textarea type=\"text\" id=\"story_6\" value=\"\" placeholder='' onchange='submitExcerise_4()' \/></textarea>";
exercise_4 += "                        <\/td>";
exercise_4 += "                        <td>";
exercise_4 += "                            <div id='e4_6_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_4 += "                    <\/tr>";
exercise_4 += "                <\/table>";
exercise_4 += "            <\/form>";

function loadExercise_4() {
     if (localStorage['exercise_4']) {
        var exercise_4 = JSON.parse(localStorage['exercise_4']);
        for (var i = 1; i<=6; i++) {
            if (exercise_4['story_'+i]) {
                $('#story_'+i).val(exercise_4['story_'+i]);
                $('#e4_'+i+'_check').css('visibility','visible');
            }           
        }
    }
}
function submitExcerise_4() {
    var exercise_4 = {};
    for (var i = 1; i <= 6; i++) {
        if ($("#story_"+i).val().length > 0) {
            exercise_4["story_"+i] = $("#story_"+i).val();
            $('#e4_'+i+'_check').css('visibility','visible');
        } else {
            $('#e4_'+i+'_check').css('visibility','hidden');
        }
    }
    localStorage.setItem('exercise_4', JSON.stringify(exercise_4));                       
}

var exercise_5="";
exercise_5 += "  <h2>Exercise 5: Types of Anxious Thinking<\/h2>";
exercise_5 += "            <p>";
exercise_5 += "                Looking at your \"Feared Social Situations\" and \"Anxious Thoughts\" (from <b>Exercise 1<\/b> and <b>2<\/b>) and, in the \"Types of Anxious Thinking\" column, select as many types of anxious thinking as you can identify for each of the anxious thoughts you recorded. ";
exercise_5 += "            <\/p>";
exercise_5 += "";
exercise_5 += "             <form id='exercise_5'>";
exercise_5 += "                <table border=\"0\">";
exercise_5 += "                    <tr>";
exercise_5 += "                        <td>";
exercise_5 += "                            <center><b>Feared Situation<\/b><\/center>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <center><b>Anxious Thoughts<\/b><\/center>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <center><b>Type<\/b><\/center>";
exercise_5 += "                        <\/td>";
exercise_5 += "                    <\/tr>";
exercise_5 += "                    <tr>";
exercise_5 += "                        <td>";
exercise_5 += "                            <textarea type='text' name='fear_1' id='fear_1' placeholder='1.' onchange='submitExcerise_5()'\/></textarea>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <textarea type='text' name='thought_1' onchange='submitExcerise_5()'\/></textarea>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <div data-role=\"fieldcontain\">";
exercise_5 += "                                <select id=\"fear_type_1\" data-native-menu=\"false\" data-mini='true' onchange='submitExcerise_5()'>";
exercise_5 += "                                    <option value=\"none\"><\/option>";
exercise_5 += "                                    <option value=\"fortune_telling\">Fortune-Telling<\/option>";
exercise_5 += "                                    <option value=\"mind_reading\">Mind Reading<\/option>";
exercise_5 += "                                    <option value=\"shoulding\">\"Shoulding\"<\/option>";
exercise_5 += "                                    <option value=\"portmortem\">Postmortem<\/option>";
exercise_5 += "                                    <option value=\"spotlight_effect\">The Spotlight Effect<\/option>";
exercise_5 += "                                    <option value=\"generating_stories\">Generating Stories<\/option>";
exercise_5 += "                                <\/select>";
exercise_5 += "                            <\/div>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <div id='e5_1_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_4 += "                        <\/td>";
exercise_5 += "                    <\/tr>";
exercise_5 += "                    <tr>";
exercise_5 += "                        <td>";
exercise_5 += "                            <textarea type='text' name='fear_2' placeholder='2.' onchange='submitExcerise_5()'\/></textarea>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <textarea type='text' name='thought_2' onchange='submitExcerise_5()'\/></textarea>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <div data-role=\"fieldcontain\">";
exercise_5 += "                                <select id=\"fear_type_2\" data-native-menu=\"false\" data-mini='true' onchange='submitExcerise_5()'>";
exercise_5 += "                                    <option value=\"none\"><\/option>";
exercise_5 += "                                    <option value=\"fortune_telling\">Fortune-Telling<\/option>";
exercise_5 += "                                    <option value=\"mind_reading\">Mind Reading<\/option>";
exercise_5 += "                                    <option value=\"shoulding\">\"Shoulding\"<\/option>";
exercise_5 += "                                    <option value=\"portmortem\">Postmortem<\/option>";
exercise_5 += "                                    <option value=\"spotlight_effect\">The Spotlight Effect<\/option>";
exercise_5 += "                                    <option value=\"generating_stories\">Generating Stories<\/option>";
exercise_5 += "                                <\/select>";
exercise_5 += "                            <\/div>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <div id='e5_2_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_5 += "                        <\/td>";
exercise_5 += "                    <\/tr>";
exercise_5 += "                    <tr>";
exercise_5 += "                        <td>";
exercise_5 += "                            <textarea type='text' name='fear_3' placeholder='3.' onchange='submitExcerise_5()'\/></textarea>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <textarea type='text' name='thought_3' onchange='submitExcerise_5()'\/></textarea>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <div data-role=\"fieldcontain\">";
exercise_5 += "                                <select id=\"fear_type_3\" data-native-menu=\"false\" data-mini='true' onchange='submitExcerise_5()'>";
exercise_5 += "                                    <option value=\"none\"><\/option>";
exercise_5 += "                                    <option value=\"fortune_telling\">Fortune-Telling<\/option>";
exercise_5 += "                                    <option value=\"mind_reading\">Mind Reading<\/option>";
exercise_5 += "                                    <option value=\"shoulding\">\"Shoulding\"<\/option>";
exercise_5 += "                                    <option value=\"portmortem\">Postmortem<\/option>";
exercise_5 += "                                    <option value=\"spotlight_effect\">The Spotlight Effect<\/option>";
exercise_5 += "                                    <option value=\"generating_stories\">Generating Stories<\/option>";
exercise_5 += "                                <\/select>";
exercise_5 += "                            <\/div>";
exercise_5 += "                        <\/td>";
exercise_5 += "                        <td>";
exercise_5 += "                            <div id='e5_3_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_5 += "                        <\/td>";
exercise_5 += "                    <\/tr>";
exercise_5 += "                <\/table>";
exercise_5 += "            <\/form>";
exercise_5 += "            <p>";
exercise_5 += "                See if you notice any trends. Does your mind tend to use the same type of thinking over and over, or does it prefer variety?";
exercise_5 += "            <\/p>";
exercise_5 += "            <fieldset data-role=\"controlgroup\">";
exercise_5 += "                <input type=\"radio\" name=\"radio-choice\" id=\"vary_1\" value=\"choice-1\" checked=\"checked\" onchange='submitExcerise_5()'\/>";
exercise_5 += "                <label for=\"vary_1\">I typically use the same type of anxious thinking.<\/label>";
exercise_5 += "                <input type=\"radio\" name=\"radio-choice\" id=\"vary_2\" value=\"choice-1\" onchange='submitExcerise_5()'\/>";
exercise_5 += "                <label for=\"vary_2\">I typically vary.<\/label>";
exercise_5 += "            <\/fieldset>";


function loadExercise_5() {
    if (localStorage['exercise_1']) {
        var exercise_1 = JSON.parse(localStorage['exercise_1']);
        document.forms["exercise_5"]["fear_1"].value = exercise_1['fear_1'];
        document.forms["exercise_5"]["fear_2"].value = exercise_1['fear_2'];
        document.forms["exercise_5"]["fear_3"].value = exercise_1['fear_3'];
    }
    if (localStorage['exercise_2']) {
        var exercise_2 = JSON.parse(localStorage['exercise_2']);
        document.forms["exercise_5"]["thought_1"].value = exercise_2['thought_1'];
        document.forms["exercise_5"]["thought_2"].value = exercise_2['thought_2'];
        document.forms["exercise_5"]["thought_3"].value = exercise_2['thought_3'];
    }
    if (localStorage['exercise_5']) {
        var exercise_5 = JSON.parse(localStorage['exercise_5']);

        for (var i = 1; i<=3; i++) {
            $("#fear_type_"+i).val(exercise_5['fear_type_'+i]).attr('selected', true)
            if (exercise_5['fear_type_'+i]) {
                console.log(exercise_5['fear_type_'+i]);
                $('#e5_'+i+'_check').css('visibility','visible');
            }
        }  

        for (var i = 1; i<=2; i++) {
            if (exercise_5['vary_'+i]) {
                $('#vary_'+i).attr("checked",true)
                $('#e5_'+i+'_check').css('visibility','visible');
            }
        }  
    }
}
   
function submitExcerise_5() {
    var exercise_1 = {};
    for (var i = 1; i <= 3; i++) {
        if (document.forms["exercise_5"]["fear_"+i].value.length>0) {
            exercise_1["fear_"+i] = document.forms["exercise_5"]["fear_"+i].value;
        } else {
            exercise_1["fear_"+i] = "";
        }
    }
    localStorage.setItem('exercise_1', JSON.stringify(exercise_1));
    var exercise_2 = {};
    for (var i = 1; i <= 3; i++) {
        if (document.forms["exercise_5"]["thought_"+i].value.length>0) {
            exercise_2["thought_"+i] = document.forms["exercise_5"]["thought_"+i].value;
        } else {
            exercise_2["thought_"+i] = "";
        }
    }
    localStorage.setItem('exercise_2', JSON.stringify(exercise_2));

    var exercise_5 = {};
    for (var i = 1; i <= 3; i++) {
        if ($("#fear_type_"+i).val() != 'none') {
            $('#e5_'+i+'_check').css('visibility','visible');
            exercise_5['fear_type_'+i] = $("#fear_type_"+i).val();
        } else {
            $('#e5_'+i+'_check').css('visibility','hidden');
        }

    }


    for (var i = 1; i <= 2; i++) {
        exercise_5["vary_"+i] = $("#vary_"+i).prop("checked");
    }
    localStorage.setItem('exercise_5', JSON.stringify(exercise_5));

}


var exercise_7="";
exercise_7 += " <h2> Practice defusion: Defusing from Your Anxious Thoughts <\/h2>";
exercise_7 += "            <p>";
exercise_7 += "                To get as much practice as possible, you can try defusing from everyday thoughts (for example, <i>I am having the thought that I want to eat a muffin for breakfast)<\/i> as well as social-anxiety thoughts. ";
exercise_7 += "                <br>";
exercise_7 += "                <br>";
exercise_7 += "                You can try some of the strategies right when you notice the thought (e.g, <a href=\"#definition_naming_the_mind\" data-rel=\"popup\"><b>naming what the mind is doing<\/b><\/a> or <a href=\"#definition_thanking_the_mind\" data-rel=\"popup\"><b>thanking the mind<\/b><\/a>); for others, you may want to wait until you have some time to yourself (e.g., <a href=\"#definition_ditching_the_meaning\" data-rel=\"popup\"><b>ditching the meaning of your thoughts<\/b><\/a> or <a href=\"#definition_awareness_of_thinking\" data-rel=\"popup\"><b>awareness of thinking<\/b><\/a>). ";
exercise_7 += "            <\/p>";
exercise_7 += "            <form name=\"exercise_7\" id='exercise_7'>";
exercise_7 += "                <table border=\"0\" cellpadding='0' id='table_exercise_7'>";
exercise_7 += "                    <tr>";
exercise_7 += "                        <td>";
exercise_7 += "                            <center><b>Thought<\/b><\/center>";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td>";
exercise_7 += "                            <center><b>Defusion Strategy<\/b><\/center>";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td>";
exercise_7 += "                            <center><b>What Did You Notice?<\/b><\/center>";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td>";
exercise_7 += "                        <\/td>";
exercise_7 += "                    <\/tr>";
exercise_7 += "                    <tr id='exercise_7_row_1'>";
exercise_7 += "                        <td>";
exercise_7 += "                            <textarea type='text' class='exercise_7_thought' onchange='submitExcerise_7()'\/></textarea>";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td>";
exercise_7 += "                            <div data-role=\"fieldcontain\">";
exercise_7 += "                                <select id='exercise_7_strategy_1' class=\"exercise_7_strategy\" data-native-menu=\"false\" data-mini='true' onchange='submitExcerise_7()'>";
exercise_7 += "                                    <option value=\"none\"><\/option>";
exercise_7 += "                                    <option value=\"IDENTIFYING_THOUGHTS\">Identifying Thoughts<\/option>";
exercise_7 += "                                    <option value=\"NAMING\">Naming Thoughts<\/option>";
exercise_7 += "                                    <option value=\"NAMING_TYPES\">Real Naming of Thoughts<\/option>";
exercise_7 += "                                    <option value=\"DITCH_MEANING\">Ditch The Meaning<\/option>";
exercise_7 += "                                    <option value=\"THANKING\">Thanking The Mind<\/option>";
exercise_7 += "                                    <option value=\"DR_PHIL\">Dr. Phil<\/option>";
exercise_7 += "                                    <option value=\"AWARENESS\">Awareness Of Thinking<\/option>";
exercise_7 += "                                    <option value=\"OBSERVE\">Observe Your Thoughts<\/option>";
exercise_7 += "                                <\/select>";
exercise_7 += "                            <\/div>";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td>";
exercise_7 += "                            <textarea type='text' class='exercise_7_notice' onchange='submitExcerise_7()'\/></textarea>";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td >";
exercise_7 += "                        <\/td>";
exercise_7 += "                        <td>";
exercise_7 += "                            <div id='e7_1_check' style='color:#00FF00;visibility:hidden;'>&#x2713;<\/div>";
exercise_7 += "                        <\/td>";
exercise_7 += "                    <\/tr>";
exercise_7 += "                <\/table>";
exercise_7 += "            <\/form>";
exercise_7 += "            <a href=\"#\" id='2' onclick='exercise_7_add_row();' data-role=\"button\" >Add Entry<\/a>";

exercise_7 += "            <div id=\"definition_naming_the_mind\" data-role=\"popup\" data-theme=\"e\" data-overlay-theme=\"a\" class=\"ui-content\">";
exercise_7 += "                <a href=\"#\" data-rel=\"back\" data-role=\"button\" data-theme=\"a\" data-icon=\"delete\" data-iconpos=\"notext\" class=\"ui-btn-right\">Close<\/a>";
exercise_7 += "                <h3> Naming What the Mind Is Doing: <\/h3>";
exercise_7 += "                <p>";
exercise_7 += "                    Here you name the type of thinking that your mind is engaged in. <b>EXAMPLES<\/b> are:";
exercise_7 += "                <\/p><ul>";
exercise_7 += "                    <li><p>I am worrying that my hands will shake<\/p><\/li>";
exercise_7 += "                    <li><p>I'm engaged in mind reading right now<\/p><\/li>";
exercise_7 += "                    <li><p>I'm doing the postmortem<\/p><\/li>";
exercise_7 += "                    <li><p>I'm \"shoulding\" <\/p><\/li>";
exercise_7 += "                <p><\/ul>";
exercise_7 += "                    Some people find that this enables them to get out of their mind and refocus on their task, whatever that may be (doing a presentation, interacting at a party or making small talk, for example). ";
exercise_7 += "                <\/p>";
exercise_7 += "            <\/div>";

exercise_7 += "            <div id=\"definition_thanking_the_mind\" data-role=\"popup\" data-theme=\"e\" data-overlay-theme=\"a\" class=\"ui-content\">";
exercise_7 += "                <a href=\"#\" data-rel=\"back\" data-role=\"button\" data-theme=\"a\" data-icon=\"delete\" data-iconpos=\"notext\" class=\"ui-btn-right\">Close<\/a>";
exercise_7 += "                <h3> Thanking the Mind: <\/h3>";
exercise_7 += "                <p>";
exercise_7 += "                    When your mind thinks about the dangers that await you in social situations, it is just doing its job, and it deserves some credit for that (even if it ultimately is not helpful). Hence, a popular defusion strategy is to thank the mind for thoughts. ";
exercise_7 += "                <\/p>";
exercise_7 += "            <\/div>";

exercise_7 += "            <div id=\"definition_ditching_the_meaning\" data-role=\"popup\" data-theme=\"e\" data-overlay-theme=\"a\" class=\"ui-content\">";
exercise_7 += "                <a href=\"#\" data-rel=\"back\" data-role=\"button\" data-theme=\"a\" data-icon=\"delete\" data-iconpos=\"notext\" class=\"ui-btn-right\">Close<\/a>";
exercise_7 += "            <h3> Ditching the Meaning of Your Thoughts: <\/h3>";
exercise_7 += "            <p>";
exercise_7 += "                Given that we tend to get caught up in the meanings of the words that make up our thoughts, several defusion strategies involve highlighting aspects of words other than their meanings, such as how they sound or look.";
exercise_7 += "                <br>";
exercise_7 += "                <b><i> EXAMPLES: <\/b><\/i>";
exercise_7 += "            <\/p>";
exercise_7 += "            <ul><li> <h4> Repetition. <\/h4>";
exercise_7 += "                Try this now: repeat the word \"boring\" very quickly for thirty to forty-five seconds, paying attention to how the word sounds as you do it";
exercise_7 += "                <ul><li><p>";
exercise_7 += "                    What did you notice? Emily commented that after twenty seconds, she could only hear \"boing\", and the word lost some of its heaviness for her.";
exercise_7 += "                <\/p><\/li>";
exercise_7 += "                <li><p>";
exercise_7 += "                    Try this again with a word or phrase that you tend to fuse with in your feared social situations.";
exercise_7 += "                <\/p><\/li><\/ul>";
exercise_7 += "            <\/li>";
exercise_7 += "            <li> <h4> Other voices. <\/h4>";
exercise_7 += "                <p>";
exercise_7 += "                    Try speaking your thoughts in someone else's voice, such as a television personality, politician, or cartoon character.";
exercise_7 += "                <\/p>";
exercise_7 += "            <\/li>";
exercise_7 += "            <li> <h4> Singing your thoughts. <\/h4>";
exercise_7 += "                <p>";
exercise_7 += "                    Try singing your thoughts to the tune of a song such as \"Happy Birthday\" or to your favorite (or least favorite) song. Try searching for songs that include phrases that are relevant to you (\"He's So Shy\" by The Pointer Sisters is an example).";
exercise_7 += "                <\/p>";
exercise_7 += "            <\/li>";
exercise_7 += "            <li><h4> Seeing your thoughts. <\/h4>";
exercise_7 += "                <p>";
exercise_7 += "                    Notice how your thoughts look by printing, writing, or typing them in different fonts and colors.";
exercise_7 += "                <\/p>";
exercise_7 += "            <\/li><\/ul>";
exercise_7 += "            <\/div>";

exercise_7 += "            <div id=\"definition_awareness_of_thinking\" data-role=\"popup\" data-theme=\"e\"  data-overlay-theme=\"a\" class=\"ui-content\">";
exercise_7 += "                <a href=\"#\" data-rel=\"back\" data-role=\"button\" data-theme=\"a\" data-icon=\"delete\" data-iconpos=\"notext\" class=\"ui-btn-right\">Close<\/a>";
exercise_7 += "            <h3> \"I Am Having the Thought That...\":  <\/h3>";
exercise_7 += "            <p>";
exercise_7 += "                With this strategy, you simply acknowledge that the mind is thinking by saying to yourself, <i>I am having the thought that<\/i> ___________. Try it now by reading aloud the following two sentences, noticing any differences in their emotional impact:";
exercise_7 += "                <br>";
exercise_7 += "                <i>I am going to blush.";
exercise_7 += "                <br>";
exercise_7 += "                I am having the thought that I am going to blush.<\/i>";
exercise_7 += "                <br>";
exercise_7 += "                What did you notice? Some people find the second sentence to be less anxiety provoking or to seem less \"real.\" Try it again with a thought that is relevant for you (e.g. <i>my voice is going to quiver; I am going to sweat; I am not going to be able to control my facial expressions<\/i>). ";
exercise_7 += "            <\/p>";
exercise_7 += "            <\/div>";







function loadExercise_7() {
    if (localStorage['exercise_7']) {
        var exercise_7 = JSON.parse(localStorage['exercise_7']);

        for (var i = 1; i<=exercise_7['rows']; i++){
            if (i===1) {
                var thoughts = document.getElementsByClassName('exercise_7_thought');
                var notices = document.getElementsByClassName('exercise_7_notice');


                thoughts[i-1].value = exercise_7['exercise_7_thought_'+i];
                notices[i-1].value = exercise_7['exercise_7_notice_'+i];
                if ((exercise_7['exercise_7_thought_'+i].length > 0) && (exercise_7['exercise_7_notice_'+i].length > 0) && (exercise_7['exercise_7_strategy_'+i] != 'none')) {
                    $('#e7_'+i+'_check').css('visibility','visible');
                }
            } else {
                exercise_7_add_row(exercise_7['exercise_7_thought_'+i],exercise_7['exercise_7_notice_'+i],true);
            }

            thoughts[i-1].value = exercise_7['exercise_7_thought_'+i];
            notices[i-1].value = exercise_7['exercise_7_notice_'+i];
            $("#exercise_7_strategy_"+i).val(exercise_7['exercise_7_strategy_'+i]).attr('selected', true)
        }
    }
}
function submitExcerise_7() {
    var exercise_7 = {};
    var table=document.getElementById("table_exercise_7");

    exercise_7['rows'] = table.rows.length-1; //exclude header

    var strategies = document.getElementsByClassName('exercise_7_strategy');
    var thoughts = document.getElementsByClassName('exercise_7_thought');
    var notices = document.getElementsByClassName('exercise_7_notice');
    for (var i = 1; i<table.rows.length;i++){
        var id = strategies[i+i-1].id; //i'm not proud of myself

        if (i===1) {
            if ((thoughts[i-1].value.length > 0) && (notices[i-1].value.length > 0) && ($("#"+id).val() != 'none')) {
                $('#e7_'+i+'_check').css('visibility','visible');
            } else {
                $('#e7_'+i+'_check').css('visibility','hidden');
            }
        }
        exercise_7['exercise_7_thought_'+i] = thoughts[i-1].value

        console.log("id is:" +id)
        exercise_7['exercise_7_strategy_'+i] = $("#"+id).val();
        exercise_7['exercise_7_notice_'+i] =  notices[i-1].value

        console.log(thoughts[i-1].value)
        console.log($("#"+id).val())
        console.log (notices[i-1].value)

    }
    localStorage.setItem('exercise_7', JSON.stringify(exercise_7));             
}

function exercise_7_remove_row(id) {
    var table=document.getElementById("table_exercise_7");
    var rowIndex = document.getElementById("exercise_7_row_"+id).rowIndex;
    table.deleteRow(rowIndex);
    submitExcerise_7();
}
function exercise_7_add_row(thought, notice, pageload) {
    if (!thought) {
        thought = ""
    }
    if (!notice) {
        notice = ""
    }
    var table=document.getElementById("table_exercise_7");
    var row_number = table.rows.length;

    var row=table.insertRow(-1);
    row.id = "exercise_7_row_"+row_number;
    console.log("id of new row:"+row.id);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);

    cell1.innerHTML="<textarea type='text' class='exercise_7_thought' onchange='submitExcerise_7();' id='exercise_7_thought_"+row_number+"' value='"+thought+"'/></textarea>";


    cell2.innerHTML="<div data-role='fieldcontain'><select class='exercise_7_strategy' onchange='submitExcerise_7();' data-mini='true' id='exercise_7_strategy_"+row_number+"'  data-native-menu='false'><option value='none'></option><option value='Fortune-Telling'>Fortune-Telling</option><option value='Mind Reading'>Mind Reading</option><option value='Shoulding'>'Shoulding'</option><option value='Postmortem'>Postmortem</option><option value='The Spotlight Effect'>The Spotlight Effect</option><option value='Generating Stories'>Generating Stories</option></select></div>";

    cell3.innerHTML = "<textarea type='text' class='exercise_7_notice' onchange='submitExcerise_7();' name='exercise_7_notice_1' value='"+notice+"' /></textarea>";
    cell4.innerHTML = "<a href='#' id='exercise_7_remove_"+row_number+"' onclick='exercise_7_remove_row("+row_number+");' data-role='button' data-icon='delete' data-iconpos='notext' data-mini='true' data-inline='true'>Delete</a>";


    if (!pageload) {$('#page').trigger("pagecreate");}  //problems with loading page;
}
