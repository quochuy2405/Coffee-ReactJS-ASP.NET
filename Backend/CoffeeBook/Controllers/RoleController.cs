using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using CoffeeBook.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly RoleService _service;
        private readonly Context _context;
        public RoleController(IConfiguration config, Context context)
        {
            _config = config;
            _context = context;
            _service = new RoleService(_config, _context);
        }
        [Route("role")]
        [HttpGet]
        public JsonResult Get()
        {
            var roles = _service.GetAllRoles();
            return new JsonResult(roles);
        }

        [Route("role/{id}")]
        [HttpGet]
        public ActionResult GetById(int id)
        {
            Role role = _service.GetRoleById(id);
            if (role == null) return BadRequest();
            else return new JsonResult(role);
        }

        [Route("role/add")]
        [HttpPost]
        public ActionResult AddRole(Role role)
        {
            int result = _service.Post(role);
            if (result > 0)
                return Ok();
            return BadRequest();
        }

        [Route("role/edit/{id}")]
        [HttpPut]
        public IActionResult UpdateRole(int id, Role role)
        {
            if (ModelState.IsValid)
            {
                int res = _service.Put(id, role);
                if (res > 0) return Ok();
                else return BadRequest();
            }
            return BadRequest();
        }

        [Route("role/delete/{id}")]
        [HttpDelete]
        public IActionResult DeleteRole(int id)
        {
            int res = _service.Delete(id);
            if (res > 0) return Ok();
            return BadRequest();
        }
    }
}
