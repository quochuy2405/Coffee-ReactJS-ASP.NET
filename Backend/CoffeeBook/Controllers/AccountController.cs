using CoffeeBook.Authen;
using CoffeeBook.DataAccess;
using CoffeeBook.Dto;
using CoffeeBook.Models;
using CoffeeBook.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeBook.Controllers
{
    /*[Route("api/[controller]")]*/
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly AccountService _service;
        private readonly Context context;
        private readonly AppSetting _appSettings;

        public AccountController(IConfiguration config, Context ctx, IOptions<AppSetting> appSettings)
        {
            _config = config;
            context = ctx;
            _appSettings = appSettings.Value;
            _service = new AccountService(_config, ctx);
        }


        [Route("admin/login")]
        [HttpPost]
        public JsonResult Login(AdminLoginDto dto)
        {
            Account result = _service.Login(dto);

            if(result == null)
            {
                return new JsonResult("Username or Password is invalid.");
            }
            var token = generateJwtToken(result);
            return new JsonResult(new { Token = token });
        }


        [Route("account")]
        [HttpGet]
        public JsonResult GetAllAccount()
        {
            List<Account> accounts = _service.FindAll();
            if (accounts.Count == 0)
                return new JsonResult("There is no data");

            return new JsonResult(accounts);
        }

        [Route("account/{id}")]
        [HttpGet]
        public ActionResult GetAccountById(int id)
        {
            Account account = _service.FindById(id);
            if (account == null)
                return BadRequest();

            return new JsonResult(account);
        }

        [Route("account/add")]
        [HttpPost]
        public ActionResult AddAccount(Account account)
        {
            int result = _service.Add(account);
            if (result > 0)
                return Ok();
            return BadRequest();
        }

        [Route("account/edit/{id}")]
        [HttpPut]
        public ActionResult UpdateAccount(int id, Account account)
        {
            if (ModelState.IsValid)
            {
                int res = _service.Update(id, account);
                if (res > 0) return Ok();
                else return BadRequest();
            }
            return BadRequest();
        }

        [Route("account/delete/{id}")]
        [HttpDelete]
        public ActionResult DeleteAccount(int id)
        {
            int res = _service.DeleteById(id);
            if (res > 0) return Ok();
            else return BadRequest();
        }


        private string generateJwtToken(Account account)
        {
            var claims = new Claim[]
            {
                new Claim("Id", account.Id.ToString()),
                new Claim("Username", account.Username),
                new Claim("RoleId", account.RoleId.ToString())
            };

            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddSeconds(20),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
