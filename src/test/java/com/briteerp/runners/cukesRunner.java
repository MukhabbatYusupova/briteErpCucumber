package com.briteerp.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)  // allows me to run cucumber with Junit
@CucumberOptions(
        features = "src/test/resources/features",  //defines where the freature files are stored at
        glue = "com/briteerp/stepDefinition",
        // defines where the cucumber annotations are located at.( if a class contains cucumber annotations, the class cannot be extended)
        dryRun = false,
        /*
        defines wheather run step definition or feature file.
        true: runs the feature file only. if the stepdefinition is not implemented, will appear on console
        false: runs the step definition first and then feature file.

         */
        tags = "@user1",  // decides which featurefile or scenarios to run
        plugin = {    // genrates reports
                "html:CucumberReports/html" ,
                "pretty:CucumberReports/pretty/MyPreetReport.txt",
                "junit:CucumberReports/junit/MyjunitReports.xml"
        }

)
public class cukesRunner {


}
