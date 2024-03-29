# asp-net-Core-Api-Angular-16
Asp.Net Core Web API and Angular 16 CRUD Anime

### Screenshot

![Screenshot 2024-01-25 at 21-06-32 Project1](https://github.com/yahyaahrika/asp-net-Core-Api-Angular-16/assets/16888628/09819112-2c1d-4af9-ab37-3b842aa40c5e)


![Screenshot 2024-01-25 at 21-06-44 Project1](https://github.com/yahyaahrika/asp-net-Core-Api-Angular-16/assets/16888628/0ba9e7f9-d688-46c2-81d0-137e1554a880)

Asp Net Core 
Connection  database

## BankEnd Asp.Net Core

>file : appsettings.json

```javascript
` {
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "App_AnimeContext": "Server=YourServer;Database=DatabaseName;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}`
```

In Visual Studio, open NuGet Package Manager Console from Tools -> NuGet Package Manager -> Package Manager Console and enter the following command:
##### Package Manager Console/PowerShell

> update-database

##### Change url server AspNetCore

Angular Files 
>src > environment > environment.development.ts

```javascript
 export const environment = {
    production: true,
    ApiUrl : '//localhost:5113/api/Animes'
};

```

#### Run  Angular

```
ng serve
```

## API
![Screenshot 2024-01-25 at 23-22-49 Swagger UI](https://github.com/yahyaahrika/asp-net-Core-Api-Angular-16/assets/16888628/09fe8fd3-3e1e-4d9e-98bb-3efc113d532a)
