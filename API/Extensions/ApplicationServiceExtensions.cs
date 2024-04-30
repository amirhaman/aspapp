// this file has been created to supply startup program for neccesary Extentions

using Application.Core;
using Application.Activities;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{

    // when creating a extension class we need to make sure it is a static class because we do not need to create a new class when creating extentions class
    public static class ApplicationServiceExtensions
    {
        // adding IConfiguration will give access to our appsettings.json
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // builder.Services.AddApp
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt => {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            // adding Cors
            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy", policy => {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            // adding mediator to program
            services.AddMediatR(config => config.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}

//example above code inside program changed to above and removed from program.cs file
 
// builder.Services.AddApp
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();
// builder.Services.AddDbContext<DataContext>(opt => {
    // opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
// });

// adding Cors
// builder.Services.AddCors(opt => {
    // opt.AddPolicy("CorsPolicy", policy => {
        // policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
    // });
// });

// adding mediator to program
// builder.Services.AddMediatR(configuration => configuration.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
// builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);