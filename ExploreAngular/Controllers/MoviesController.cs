using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExploreAngular.Models;
using System.Web.Http;
using System.Web;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace ExploreAngular.Controllers
{
    [Route("api/Movies/")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;

        private readonly EmployeeDBContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public MoviesController(EmployeeDBContext context, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
             _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [Route("GetMovie")]
        // GET: api/Movies
        [HttpGet]
        public ActionResult<List<Movie>> GetMovie()
        {

            var db = _context.Movie; ;

            List<Movie> data = db.ToList();
            return data;
           
        }

        // GET: api/Movies/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var movie = await _context.Movie.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        // PUT: api/Movies/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie([FromRoute] int id, [FromBody] Movie movie)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (id != movie.Id)
            {
                return BadRequest();
            }

            _context.Entry(movie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        

        // POST: api/Movies
        [HttpPost]
        public async Task<IActionResult> PostMovie([FromBody] Movie movie)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //string imageName = null;
            //var httpRequest = HttpContext.Current.Request;
            ////Upload Image
            //var postedFile = httpRequest.Files["Image"];
            ////Create custom filename
            //imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            //imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            //var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
            //postedFile.SaveAs(filePath);



            _context.Movie.Add(movie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovie", new { id = movie.Id }, movie);
        }

        // DELETE: api/Movies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie([FromRoute] int id)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var movie = await _context.Movie.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }

            _context.Movie.Remove(movie);
            await _context.SaveChangesAsync();

            return Ok(movie);
        }

        private bool MovieExists(int id)
        {
            return _context.Movie.Any(e => e.Id == id);
        }
    }
}