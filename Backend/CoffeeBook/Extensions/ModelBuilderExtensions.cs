using CoffeeBook.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Extensions
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            #region Account
            modelBuilder.Entity<Account>().HasData(
                new Account()
                {
                    Id = 1,
                    Username = "admin",
                    Password = "admin123",
                    Name = "Võ Hoàng Nhật",
                    Avatar = "",
                    RoleId = 1
                },
                new Account()
                {
                    Id = 2,
                    Username = "manager",
                    Password = "manager123",
                    Name = "Bùi Quốc Huy",
                    Avatar = "",
                    RoleId = 2
                },
                new Account()
                {
                    Id = 3,
                    Username = "staff",
                    Password = "staff123",
                    Name = "Nguyễn Văn Nhật Huy",
                    Avatar = "",
                    RoleId = 3
                },
                new Account()
                {
                    Id = 4,
                    Username = "shipper",
                    Password = "shipper123",
                    Name = "Nguyễn Bá Hoàng",
                    Avatar = "",
                    RoleId = 4
                }
                );
            #endregion
            #region Bill
            modelBuilder.Entity<Bill>().HasData(
                new Bill()
                {
                    Id = 1,
                    Status = "Paid",
                    TotalPrice = 100000,
                    Validated = 1,
                    CustomerId = 1,
                    Address = "Đặng Thùy Trâm",
                    Name = "Võ Hoàng Nhật",
                    CreatedDate = DateTime.Now,
                    Note = "Để đá riêng",
                    PayBy = "Tiền mặt",
                    Phone = "0942400722",
                    Time = "15-20 phút",
                },
                new Bill()
                {
                    Id = 2,
                    Status = "Pending",
                    TotalPrice = 120000,
                    Validated = 0,
                    CustomerId = 1,
                    Address = "Đặng Thùy Trâm",
                    Name = "Võ Hoàng Nhật",
                    CreatedDate = DateTime.Now,
                    Note = "Để đá riêng",
                    PayBy = "Tiền mặt",
                    Phone = "0942400722",
                    Time = "15-20 phút",
                },
                new Bill()
                {
                    Id = 3,
                    Status = "Active",
                    TotalPrice = 50000,
                    Validated = 1,
                    CustomerId = 1,
                    Address = "Đặng Thùy Trâm",
                    Name = "Võ Hoàng Nhật",
                    CreatedDate = DateTime.Now,
                    Note = "Để đá riêng",
                    PayBy = "Tiền mặt",
                    Phone = "0942400722",
                    Time = "15-20 phút",
                },
                new Bill()
                {
                    Id = 4,
                    Status = "Pending",
                    TotalPrice = 80000,
                    Validated = 1,
                    CustomerId = 1,
                    Address = "Đặng Thùy Trâm",
                    Name = "Võ Hoàng Nhật",
                    CreatedDate = DateTime.Now,
                    Note = "Để đá riêng",
                    PayBy = "Tiền mặt",
                    Phone = "0942400722",
                    Time = "15-20 phút",
                }
                );
            #endregion
            #region Customer
            modelBuilder.Entity<Customer>().HasData(
                new Customer()
                {
                    Id = 1,
                    Username = "khachhang1",
                    Password = "khachhang1",
                    Email = "khachhang1@gmail.com",
                    Name = "Võ Hoàng Nhật",
                    Gender = 1,
                    Address = "167/19 Đặng Thùy Trâm",
                    Avata = "nhat.png",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Phone = "0942400722",
                },
                new Customer()
                {
                    Id = 2,
                    Username = "khachhang2",
                    Password = "khachhang2",
                    Email = "khachhang2@gmail.com",
                    Name = "Bùi Quốc Huy",
                    Gender = 1,
                    Address = "167/19 Đặng Thùy Trâm",
                    Avata = "qhuy.png",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Phone = "0942400723",
                },
                new Customer()
                {
                    Id = 3,
                    Username = "khachhang3",
                    Password = "khachhang3",
                    Email = "khachhang3@gmail.com",
                    Name = "Nguyễn Bá Hoàng",
                    Gender = 1,
                    Address = "167/19 Đặng Thùy Trâm",
                    Avata = "hoang.png",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Phone = "0942400724",
                },
                new Customer()
                {
                    Id = 4,
                    Username = "khachhang4",
                    Password = "khachhang4",
                    Email = "khachhang4@gmail.com",
                    Name = "Nguyễn Văn Nhật Huy",
                    Gender = 1,
                    Address = "167/19 Đặng Thùy Trâm",
                    Avata = "nhuy.png",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Phone = "0942400725",
                }
                );
            #endregion
            #region Discount
            modelBuilder.Entity<Discount>().HasData(
                new Discount()
                {
                    Id = 1,
                    Name = "Phiếu giảm giá 20k cho đơn hàng trên 100k",
                    Quantity = 10,
                    Value = 20000,
                    Photo = "https://minio.thecoffeehouse.com/image/admin/storage/852__C4_90o_CC_82_CC_80ng-gia_CC_81-29K_coupon.jpg",
                    ExpiredDate = DateTime.Parse("12/24/2021")
                },
                new Discount()
                {
                    Id = 2,
                    Name = "Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ",
                    Quantity = 10,
                    Value = 20000,
                    Photo = "https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg",
                    ExpiredDate = DateTime.Parse("12/24/2021")
                },
                new Discount()
                {
                    Id = 3,
                    Name = "Ưu đãi 20% đơn Pickup 2 món bất kỳ",
                    Quantity = 10,
                    Value = 20000,
                    Photo = "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
                    ExpiredDate = DateTime.Parse("12/24/2021")
                },
                new Discount()
                {
                    Id = 4,
                    Name = "Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ",
                    Quantity = 10,
                    Value = 20000,
                    Photo = "https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg",
                    ExpiredDate = DateTime.Parse("12/24/2021")
                },
                new Discount()
                {
                    Id = 5,
                    Name = "Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ",
                    Quantity = 10,
                    Value = 20000,
                    Photo = "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
                    ExpiredDate = DateTime.Parse("12/24/2021")
                }
                );
            #endregion
            #region Employee
            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = 1,
                    Name = "Võ Hoàng Nhật",
                    Age = 20,
                    Gender = 1,
                    Email = "nhatvh@gmail.com",
                    Phone = "1234567890",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                },
                new Employee
                {
                    Id = 2,
                    Name = "Bùi Quốc Huy",
                    Age = 20,
                    Gender = 1,
                    Email = "huybq@gmail.com",
                    Phone = "1234567891",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                },
                new Employee
                {
                    Id = 3,
                    Name = "Nguyễn Văn Nhật Huy",
                    Age = 20,
                    Gender = 1,
                    Email = "huynvn@gmail.com",
                    Phone = "1234567892",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                },
                new Employee
                {
                    Id = 4,
                    Name = "Nguyễn Bá Hoàng",
                    Age = 20,
                    Gender = 1,
                    Email = "hoangnb@gmail.com",
                    Phone = "1234567893",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                }
                );
            #endregion
            #region Manager 
            modelBuilder.Entity<Manager>().HasData(
                new Manager
                {
                    Id = 1,
                    Name = "Võ Hoàng Nhật",
                    Age = 20,
                    Gender = 1,
                    Email = "nhatvh@gmail.com",
                    Phone = "1234567890",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                },
                new Manager
                {
                    Id = 2,
                    Name = "Bùi Quốc Huy",
                    Age = 20,
                    Gender = 1,
                    Email = "huybq@gmail.com",
                    Phone = "1234567891",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                },
                new Manager
                {
                    Id = 3,
                    Name = "Nguyễn Văn Nhật Huy",
                    Age = 20,
                    Gender = 1,
                    Email = "huynvn@gmail.com",
                    Phone = "1234567892",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Hoạt động"
                },
                new Manager
                {
                    Id = 4,
                    Name = "Nguyễn Bá Hoàng",
                    Age = 20,
                    Gender = 1,
                    Email = "hoangnb@gmail.com",
                    Phone = "1234567893",
                    Address = "Quận 1",
                    City = "Thành phồ Hồ Chí Minh",
                    Country = "Việt Nam",
                    Salary = 100_000_000,
                    Status = "Khóa"
                }
                );
            #endregion
            #region News
            modelBuilder.Entity<News>().HasData(
                new News()
                {
                    Id = 1,
                    Thumbnail = "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
                    Title = "Nghệ thuật pha chế - Cold Brew 1",
                    Content = "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua)."
                },
                new News()
                {
                    Id = 2,
                    Thumbnail = "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
                    Title = "Nghệ thuật pha chế - Espresso 1",
                    Content = "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua)."
                },
                new News()
                {
                    Id = 3,
                    Thumbnail = "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
                    Title = "Nghệ thuật pha chế - Cold Brew 2",
                    Content = "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua)."
                },
                new News()
                {
                    Id = 4,
                    Thumbnail = "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
                    Title = "Nghệ thuật pha chế - Espresso 2",
                    Content = "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua)."
                },
                new News()
                {
                    Id = 5,
                    Thumbnail = "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
                    Title = "Nghệ thuật pha chế - Cold Brew 3",
                    Content = "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua)."
                },
                new News()
                {
                    Id = 6,
                    Thumbnail = "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
                    Title = "Nghệ thuật pha chế - Espresso 3",
                    Content = "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua)."
                }
                );
            #endregion
            #region Product
            modelBuilder.Entity<Product>().HasData(
                new Product()
                {
                    Id = 1,
                    Name = "Thùng 24 Lon Cà Phê Sữa Đá",
                    Price = 336000,
                    Description = "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/24-lon-cpsd_225680_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 1,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 2,
                    Name = "Cà Phê Sữa Đá Hòa Tan",
                    Price = 44000,
                    Description = "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/cpsd-3in1_971575_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 1,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 3,
                    Name = "Cà Phê Peak Flavor Hương Thơm Đỉnh Cao (350G)",
                    Price = 90000,
                    Description = "Được rang dưới nhiệt độ vàng, Cà phê Peak Flavor - Hương thơm đỉnh cao lưu giữ trọn vẹn hương thơm tinh tế đặc trưng của cà phê Robusta Đăk Nông và Arabica Cầu Đất. Với sự hòa trộn nhiều cung bậc giữa hương và vị sẽ mang đến cho bạn một ngày mới tràn đầy cảm hứng.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/peak-plavor-nopromo_715372_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 1,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 4,
                    Name = "Cà Phê Sữa Đá",
                    Price = 90000,
                    Description = "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/rich-finish-nopromo_485968.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 1,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 5,
                    Name = "Bạc Sỉu",
                    Price = 32000,
                    Description = "Bạc sỉu chính là 'Ly sữa trắng kèm một chút cà phê'. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 2,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 6,
                    Name = "Caramel Macchiato Đá",
                    Price = 50000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 2,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 7,
                    Name = "Cà Phê Đá Xay-Lạnh",
                    Price = 59000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 2,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 8,
                    Name = "Trà sữa Oolong Nướng Trân Châu",
                    Price = 55000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/olong-nuong-tran-chau_017573_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 3,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 9,
                    Name = "Hồng Trà Sữa Trân Châu",
                    Price = 55000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/tra-nhan-da_484810_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 3,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 10,
                    Name = "Hồng Trà Latte Macchiato",
                    Price = 55000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/hong-tra-latte_618293_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 3,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 11,
                    Name = "Trà Long Nhãn Hạt Chia",
                    Price = 45000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/tra-nhan-da_484810_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 3,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 12,
                    Name = "Cà Phê Đá Xay-Lạnh",
                    Price = 59000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 4,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 13,
                    Name = "Cookie Đá Xay",
                    Price = 59000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_183602_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 4,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 14,
                    Name = "Sinh Tố Việt Quất",
                    Price = 59000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/sinh-to-viet-quoc_145138_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 4,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 15,
                    Name = "Chocolate Đá Xay",
                    Price = 59000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_400940_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 4,
                    SupplierId = 1
                },
                new Product()
                {
                    Id = 16,
                    Name = "Mochi Kem Việt Quất",
                    Price = 19000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/mochi-vietqwuoc_130861_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 5,
                    SupplierId = 2
                },
                new Product()
                {
                    Id = 17,
                    Name = "Mochi Kem Phúc Bồn Tử",
                    Price = 19000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/mochi-phucbontu_097500_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 5,
                    SupplierId = 2
                },
                new Product()
                {
                    Id = 18,
                    Name = "Mochi Kem Dừa Dứa",
                    Price = 19000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/mochi-dua_975992_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 5,
                    SupplierId = 2
                },
                new Product()
                {
                    Id = 19,
                    Name = "Mochi Kem Xoài",
                    Price = 19000,
                    Description = "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
                    Photo = "https://minio.thecoffeehouse.com/image/admin/mochi-xoai_355815_400x400.jpg",
                    CreatedDate = DateTime.Now,
                    Size = 0,
                    ProductTypeId = 5,
                    SupplierId = 2
                }
                );
            #endregion
            #region ProductType
            modelBuilder.Entity<ProductType>().HasData(
                new ProductType()
                {
                    Id = 1,
                    Name = "Cà phê gói - Uống liền",
                    Description = "Cà phê đóng gói",
                    Photo = "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_cpg_web.png",
                },
                new ProductType()
                {
                    Id = 2,
                    Name = "Cà phê pha",
                    Description = "Cà phê pha",
                    Photo = "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_coffee_web.png",
                },
                new ProductType()
                {
                    Id = 3,
                    Name = "Trà Trái Cây - Trà sữa",
                    Description = "Trà Trái Cây - Trà sữa",
                    Photo = "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_tea_milk_tea_web.png",
                },
                new ProductType()
                {
                    Id = 4,
                    Name = "Đá xay - Choco - Matcha",
                    Description = "Đá xay",
                    Photo = "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_frappu_web.png",
                },
                new ProductType()
                {
                    Id = 5,
                    Name = "Bánh - snack",
                    Description = "Bánh",
                    Photo = "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_snack_web.png",
                },
                new ProductType()
                {
                    Id = 6,
                    Name = "Bộ sưu tập - quà tặng",
                    Description = "Đồ lưu niệm",
                    Photo = "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_merchandise_web.png",
                }
                );
            #endregion
            #region Role
            modelBuilder.Entity<Role>().HasData(
                new Role()
                {
                    Id = 1,
                    RoleName = "admin",
                    Description = "Someone whose job is to control the operation of all stores."
                },
                new Role()
                {
                    Id = 2,
                    RoleName = "manager",
                    Description = "The person who is responsible for managing specific store."
                },
                new Role()
                {
                    Id = 3,
                    RoleName = "staff",
                    Description = "The people who work for a store."
                },
                new Role()
                {
                    Id = 4,
                    RoleName = "shipper",
                    Description = "A person whose job is to organize the sending of goods to customer."
                }
                );
            #endregion
            #region ShoppingCart
            modelBuilder.Entity<ShoppingCart>().HasData(
                new ShoppingCart()
                {
                    Id = 1,
                    CustomerId = 1,
                },
                new ShoppingCart()
                {
                    Id = 2,
                    CustomerId = 2,
                },
                new ShoppingCart()
                {
                    Id = 3,
                    CustomerId = 3,
                },
                new ShoppingCart()
                {
                    Id = 4,
                    CustomerId = 4,
                }
                );
            #endregion
            #region ShoppingCart_Product
            modelBuilder.Entity<ShoppingCart_Product>().HasData(
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 1,
                    ProductId = 1,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 1,
                    ProductId = 2,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 2,
                    ProductId = 1,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 2,
                    ProductId = 3,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 3,
                    ProductId = 3,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 3,
                    ProductId = 2,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 4,
                    ProductId = 1,
                },
                new ShoppingCart_Product()
                {
                    ShoppingCartId = 4,
                    ProductId = 4,
                }
                );
            #endregion    
            #region Store
            modelBuilder.Entity<Store>().HasData(
                new Store
                {
                    Id = 1,
                    StoreName = "Coffee & Book Quận 1",
                    Address = "Quận 1",
                    Country = "Việt Nam",
                    Phone = "1234567890",
                    Description = "Quán café và sách tọa lạc tại Quận 1 ở Thành phồ Hồ Chí Minh, Việt Nam"
                },
                new Store
                {
                    Id = 2,
                    StoreName = "Coffee & Book Thanh Xuân",
                    Address = "Quận Thanh Xuân",
                    Country = "Việt Nam",
                    Phone = "1234567891",
                    Description = "Quán café và sách tọa lạc tại Quận Thanh Xuân ở Hà Nội, Việt Nam"
                }
                );
            #endregion
            #region Supplier
            modelBuilder.Entity<Supplier>().HasData(
                new Supplier()
                {
                    Id = 1,
                    Name = "Nhà phân phối sản phẩm đồ uống",
                    Phone = "01122334455",
                    Address = "Quận 1",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Description = "Chuyên phân phối nguyên liệu, sản phầm đồ uống",
                    Url = "supplier1.com"
                },
                new Supplier()
                {
                    Id = 2,
                    Name = "Nhà phân phối sản phẩm đồ ăn",
                    Phone = "11122334455",
                    Address = "Quận 1",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Description = "Chuyên phân phối nguyên liệu, sản phầm đồ ăn",
                    Url = "supplier2.com"
                },
                new Supplier()
                {
                    Id = 3,
                    Name = "Nhà phân phối đồ sưu tập, quà lưu niệm",
                    Phone = "21122334455",
                    Address = "Quận 1",
                    City = "Hồ Chí Minh",
                    Country = "Việt Nam",
                    Description = "Chuyên phân phối đồ sưu tập, quà lưu niệm",
                    Url = "supplier3.com"
                }
                );
            #endregion
        }
    }
}
