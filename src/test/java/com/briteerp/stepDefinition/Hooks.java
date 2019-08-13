package com.briteerp.stepDefinition;

import com.briteerp.pages.*;
import com.briteerp.utilities.*;
import cucumber.api.java.*;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Hooks extends BriteErpUtils {


    @Before
    public void login(){
        driver= Driver.get();
        driver.get(ConfigurationReader.getProperty("url"));
        action=new Actions(driver);
        wait = new WebDriverWait(driver,10);

        log=new LoginPage();
        log.signInBtn.click();
        log.username.sendKeys(ConfigurationReader.getProperty("username"));
        log.password.sendKeys(ConfigurationReader.getProperty("password")+ Keys.ENTER);




        cal=new Calendar();
        sales=new Sales();

    }

    @After
    public void teardown(){
        Driver.closeDriver();
    }

}
