
using AudioItemsWebAPI.DBInterfaces.Classes;
using AudioItemsWebAPI.DBInterfaces.Interfaces;
using AudioItemsWebAPI.DBInterfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.Data;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AudioItemsContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MyConnectionString")));
builder.Services.AddScoped<IAudioItemsRepository, AudioItemsRepository>();
builder.Services.AddCors();
builder.Services.AddControllers()
    .AddJsonOptions(opts =>
    {
        opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

    });

var app = builder.Build();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//Swagger is available in production also.
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.MapControllers();


app.Run();
