using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using App_Anime.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<App_AnimeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("App_AnimeContext") ?? throw new InvalidOperationException("Connection string 'App_AnimeContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyMethod()
                  .AllowAnyHeader()
                  .SetIsOriginAllowed(origin => true) // allow any origin
                  .AllowCredentials());

builder.Services.AddCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
