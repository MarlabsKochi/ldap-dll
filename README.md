# ldap-dll
This discourse plugin allows you to use Local login UI for LDAP authentication.It is just using discourse default sign in button for ldap authentication.This plugin is very useful when application is not require any local authentication and it is vary easy to use also. 

####Steps

Enable Ldap authentication in the discourse project.You can add any working LDAP athentication plugin currently available for discourse(steps to add a discourse plugin [here](https://meta.discourse.org/t/install-a-plugin/19157))

Add [ldap-dll](https://github.com/MarlabsKochi/ldap-dll.git) plugin to the project (steps to add a discourse plugin [here] (https://meta.discourse.org/t/install-a-plugin/19157))

Enable the "enable local logins" option in the discourse Login settings.This is a must do for this plugin to work.
Rebuild your Discourse application.
