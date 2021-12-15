using CoffeeBook.Extensions;
using CoffeeBook.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.DataAccess
{
    public class Context : DbContext
    {

        #region  Test new connection method
        /*private readonly IConfiguration _config;
        private string connectionString;
        public Context(IConfiguration config)
        {
            _config = config;
            connectionString = _config.GetConnectionString("CoffeeBook");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseMySQL(connectionString);
        }*/
        #endregion
        public Context()
        {
        }
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Bill> Bills { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Manager> Managers { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<ShoppingCart> ShoppingCarts { get; set; }
        public DbSet<ShoppingCart_Product> ShoppingCart_Products { get; set; }
        public DbSet<Store> Stores { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Account
            modelBuilder.Entity<Account>(entity =>
            {
                entity.ToTable("Account")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.HasIndex(e => e.Username)
                    .IsUnique();
                entity.Property(e => e.Username)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode();

                entity.Property(e => e.Avatar)
                    .HasMaxLength(100);

                entity.HasOne<Role>(o => o.Role)
                    .WithMany(m => m.Accounts)
                    .HasForeignKey(fk => fk.RoleId)
                    .OnDelete(DeleteBehavior.SetNull);
            });
            #endregion
            #region Bill
            modelBuilder.Entity<Bill>(entity =>
            {
                entity.ToTable("Bill")
                    .HasKey(e => e.Id);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.CustomerId)
                    .IsRequired();

                entity.Property(e => e.Validated)
                    .HasDefaultValue(0);

                entity.Property(e => e.Status)
                    .HasMaxLength(100)
                    .HasDefaultValue("Đang chờ thanh toán")
                    .IsUnicode();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Address)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.PayBy)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Time)
                    .HasDefaultValue("15-20 phút")
                    .IsUnicode();

                entity.Property(e => e.Note)
                    .IsUnicode();

                entity.Property(e => e.CreatedDate)
                    .HasDefaultValue(DateTime.Now);

                entity.HasOne<Customer>(o => o.Customer)
                    .WithMany(m => m.Bills)
                    .HasForeignKey(fk => fk.CustomerId)
                    .OnDelete(DeleteBehavior.SetNull);
            });
            #endregion
            #region Discount
            modelBuilder.Entity<Discount>(entity =>
            {
                entity.ToTable("Discount")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Quantity)
                    .HasDefaultValue(0);

                entity.Property(e => e.Value)
                    .HasDefaultValue(0);

                entity.Property(e => e.ExpiredDate)
                    .HasDefaultValue(DateTime.Parse("1/1/2021"));

                entity.Property(e => e.Photo)
                    .HasMaxLength(250)
                    .IsUnicode();

            });
            #endregion 
            #region Employeee
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employee")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Age)
                    .IsRequired();

                /*entity.Property(e => e.Gender)
                    .IsRequired();*/

                entity.HasIndex(e => e.Email)
                    .IsUnique();
                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasIndex(e => e.Phone)
                    .IsUnique();
                entity.Property(e => e.Phone)
                    .HasMaxLength(11)
                    .IsRequired();

                entity.Property(e => e.Address)
                    .HasMaxLength(500)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.City)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Country)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Salary)
                    .HasDefaultValue(0);

                entity.Property(e => e.Status)
                    .HasMaxLength(100)
                    .HasDefaultValue("Hoạt động")
                    .IsUnicode();

                entity.HasOne<Store>(o => o.Store)
                    .WithMany(m => m.Employees)
                    .HasForeignKey(fk => fk.StoreId)
                    .OnDelete(DeleteBehavior.SetNull);
            });
            #endregion
            #region Manager
            modelBuilder.Entity<Manager>(entity =>
            {
                entity.ToTable("Manager")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Age)
                    .IsRequired();

                /*entity.Property(e => e.Gender)
                    .IsRequired();*/

                entity.HasIndex(e => e.Email)
                    .IsUnique();
                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasIndex(e => e.Phone)
                    .IsUnique();
                entity.Property(e => e.Phone)
                    .HasMaxLength(11)
                    .IsRequired();

                entity.Property(e => e.Address)
                    .HasMaxLength(500)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.City)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Country)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Salary)
                    .HasDefaultValue(0);

                entity.Property(e => e.Status)
                    .HasMaxLength(100)
                    .HasDefaultValue("Hoạt động")
                    .IsUnicode();

                entity.Property(e => e.Bonus)
                    .HasDefaultValue(0);
            });
            #endregion
            #region News
            modelBuilder.Entity<News>(entity =>
            {
                entity.ToTable("News")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.HasIndex(e => e.Title)
                    .IsUnique();
                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Content)
                    .HasColumnType("text")
                    .IsUnicode();

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(255)
                    .IsUnicode();
            });
            #endregion
            #region Product
            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .IsUnicode();

                entity.Property(e => e.Price)
                    .HasDefaultValue(0);

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date");

                entity.Property(e => e.Size)
                    .HasDefaultValue(0);

                entity.HasOne<Supplier>(o => o.Supplier)
                    .WithMany(m => m.Products)
                    .HasForeignKey(fk => fk.SupplierId)
                    .OnDelete(DeleteBehavior.SetNull);

                entity.HasOne<ProductType>(o => o.ProductType)
                    .WithMany(m => m.Products)
                    .HasForeignKey(fk => fk.ProductTypeId)
                    .OnDelete(DeleteBehavior.SetNull);
            });
            #endregion
            #region ProductType
            modelBuilder.Entity<ProductType>(entity =>
            {
                entity.ToTable("ProductType")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.HasIndex(e => e.Name)
                    .IsUnique();
                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .IsUnicode();
            });
            #endregion
            #region Role
            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.HasIndex(e => e.RoleName)
                    .IsUnique();
                entity.Property(e => e.RoleName)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .IsUnicode();
            });
            #endregion
            #region ShoppingCart
            modelBuilder.Entity<ShoppingCart>(entity =>
            {
                entity.ToTable("ShoppingCart").
                    HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.ProductQuantity)
                    .IsRequired()
                    .HasDefaultValue(0);

                entity.Property(e => e.CreatedDate)
                    .HasDefaultValue(DateTime.Now);

                entity.HasOne<Customer>(o => o.Customer)
                    .WithMany(m => m.ShoppingCarts)
                    .HasForeignKey(fk => fk.CustomerId)
                    .OnDelete(DeleteBehavior.SetNull);
            });
            #endregion
            #region ShoppingCart_Product
            modelBuilder.Entity<ShoppingCart_Product>(entity =>
            {
                entity.ToTable("ShoppingCart_Product")
                    .HasKey(e => new { e.ShoppingCartId, e.ProductId });

                entity.Property(e => e.Count)
                    .HasDefaultValue(0);

                entity.Property(e => e.TilteSize)
                    .HasDefaultValue("Nhỏ");

                entity.Property(e => e.CreatedDate)
                    .HasDefaultValue(DateTime.Now);

                entity.HasOne<ShoppingCart>(o => o.ShoppingCart)
                    .WithMany(m => m.ShoppingCart_Products)
                    .HasForeignKey(fk => fk.ShoppingCartId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne<Product>(o => o.Product)
                    .WithMany(m => m.ShoppingCart_Products)
                    .HasForeignKey(fk => fk.ProductId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
            #endregion
            #region Store
            modelBuilder.Entity<Store>(entity =>
            {
                entity.ToTable("Store")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.StoreName)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .IsUnicode();

                entity.HasIndex(e => e.Address)
                    .IsUnique();
                entity.Property(e => e.Address)
                    .HasMaxLength(500)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Country)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.HasIndex(e => e.Phone)
                    .IsUnique();
                entity.Property(e => e.Phone)
                    .HasMaxLength(11)
                    .IsRequired();

                entity.HasIndex(e => e.ManagerId)
                    .IsUnique();

                entity.HasOne<Manager>(o => o.Manager)
                    .WithOne(o => o.Store)
                    .HasForeignKey<Store>(fk => fk.ManagerId)
                    .OnDelete(DeleteBehavior.SetNull);
            });
            #endregion
            #region Supplier
            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.ToTable("Supplier")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Address)
                    .HasColumnType("text")
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.City)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Country)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.HasIndex(e => e.Phone)
                    .IsUnique();
                entity.Property(e => e.Phone)
                    .HasMaxLength(100)
                    .IsRequired();

                entity.Property(e => e.Url)
                    .HasMaxLength(500)
                    .IsRequired();
            });
            #endregion
            #region User
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer")
                    .HasKey(e => e.Id);
                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd();

                entity.HasIndex(e => e.Username)
                    .IsUnique();
                entity.Property(e => e.Username)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasIndex(e => e.Email)
                    .IsUnique();
                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasIndex(e => e.Phone)
                    .IsUnique();
                entity.Property(e => e.Phone)
                    .HasMaxLength(11)
                    .IsRequired();

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired()
                    .IsUnicode();

                entity.Property(e => e.Avata)
                    .HasMaxLength(255);

                entity.Property(e => e.Address)
                    .HasColumnType("text")
                    .IsUnicode();

                entity.Property(e => e.City)
                    .HasMaxLength(100)
                    .IsUnicode();

                entity.Property(e => e.Country)
                    .HasMaxLength(100)
                    .IsUnicode();

                /*entity.Property(e => e.Gender)
                    .HasColumnType("int");*/

            });
            #endregion


            // Data Seeding
            modelBuilder.Seed();
        }
    }
}
