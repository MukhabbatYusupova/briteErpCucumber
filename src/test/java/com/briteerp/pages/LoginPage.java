package com.briteerp.pages;

import com.briteerp.utilities.BriteErpUtils;
import com.briteerp.utilities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage extends BriteErpUtils {

    public LoginPage(){
        PageFactory.initElements(driver, this);
    }

    @FindBy (linkText="Sign in")
    public WebElement signInBtn;

    @FindBy (id = "login")
    public WebElement username;

    @FindBy (id = "password")
    public WebElement password;



}
