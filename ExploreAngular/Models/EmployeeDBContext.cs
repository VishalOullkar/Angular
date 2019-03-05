using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ExploreAngular.Models;

namespace ExploreAngular.Models
{
    public partial class EmployeeDBContext : DbContext
    {
        public EmployeeDBContext()
        {
        }

        public EmployeeDBContext(DbContextOptions<EmployeeDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmployeeForm> EmployeeForm { get; set; }
        public virtual DbSet<ReactiveFormData> ReactiveFormData { get; set; }
        public virtual DbSet<TblCountry> TblCountry { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-LCNOC8C;Initial Catalog=EmployeeDB;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpCode).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.Office).HasMaxLength(50);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Position).HasMaxLength(50);
            });

            modelBuilder.Entity<EmployeeForm>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnName("DOB")
                    .HasColumnType("date");

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.Imageurl)
                    .HasColumnName("imageurl")
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ReactiveFormData>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(10);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasColumnName("firstName")
                    .HasMaxLength(50);

                entity.Property(e => e.LastName)
                    .HasColumnName("lastName")
                    .HasMaxLength(50);

                entity.Property(e => e.Mobno).HasColumnName("mobno");

                entity.Property(e => e.State)
                    .HasColumnName("state")
                    .HasMaxLength(10);

                entity.Property(e => e.ZipCode)
                    .HasColumnName("zipCode")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<TblCountry>(entity =>
            {
                entity.ToTable("tblCountry");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }

        public DbSet<ExploreAngular.Models.Movie> Movie { get; set; }
    }
}
