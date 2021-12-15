using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using CoffeeBook.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Controllers
{
    /*[Route("api/[controller]")]*/
    [ApiController]
    /*[Authorize]*/
    public class NewsController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly NewsService service;
        private readonly Context context;

        public NewsController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            service = new NewsService(_config, ctx);
        }


        [Route("news")]
        [HttpGet]
        public ActionResult Get()
        {
            List<News> news = service.findAll();
            return new JsonResult(news);
        }

        [Route("news/{id}")]
        [HttpGet]
        public ActionResult Get(int id)
        {
            News news = service.FindById(id);
            if (news == null)
                return BadRequest();

            return new JsonResult(news);
        }

        [Route("news/add")]
        [HttpPost]
        public ActionResult Post(News news)
        {
            int res = service.save(news);
            if (res > 0) return Ok();

            return BadRequest();
        }

        [Route("news/edit/{id}")]
        [HttpPut]
        public ActionResult Put(int id, News news)
        {
            int res = service.update(id, news);
            if (res > 0) return Ok();
            return BadRequest();
        }

        [Route("news/delete/{id}")]
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            int res = service.deleteById(id);
            if (res > 0) return Ok();
            return BadRequest();
        }
    }
}
