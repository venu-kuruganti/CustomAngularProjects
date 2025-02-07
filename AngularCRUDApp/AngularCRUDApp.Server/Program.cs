using AngularCRUDApp.Server.DBInterfaces;
using AngularCRUDApp.Server.DBInterfaces.Classes;
using AngularCRUDApp.Server.DBInterfaces.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AudioItemsContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MyConnectionString")));
builder.Services.AddScoped<IAudioItemsRepository, AudioItemsRepository>();
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
