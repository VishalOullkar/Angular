using ExploreAngular.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using System.ComponentModel;

namespace ExploreAngular
{
    public class Startup
    {
        private ServiceProvider Container;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //string CS = "Data Source =DESKTOP-LCNOC8C; Initial Catalog = EmployeeDB; Integrated Security = True";

            services.AddDbContext<EmployeeDBContext>(options =>
               options.UseSqlServer(
                   Configuration.GetConnectionString("DefaultConnection")));

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            // services.AddDbContext<c>();
            //services.AddScoped<DbContext>(sp => sp.GetService<EmployeeDBContext>());
            //Container = services.BuildServiceProvider(); 
            //container is a global variable。
            // services.AddDbContext<EmployeeDBContext>(options =>
            //options.UseSqlServer(Configuration.GetConnectionString(CS)));

            //services.AddTransient<IFoo, Foo>();
            //services.AddSingleton<IBar, Bar>();
            //services.AddScoped<IHello, Hello>();
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddMvc()
      .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
