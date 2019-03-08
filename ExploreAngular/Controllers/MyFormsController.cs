using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExploreAngular.Models;

namespace ExploreAngular.Controllers
{
    [Route("api/MyForms/")]
    [ApiController]
    public class MyFormsController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public MyFormsController(EmployeeDBContext context)
        {
            _context = context;
        }

        [Route("GetEmployees")]
        // GET: api/MyForms
        [HttpGet]
        public ActionResult<List<EmployeeForm>> GetEmployeeForm()
        {
            var db = _context.EmployeeForm;
            List<EmployeeForm> data = db.ToList();
            return data;
        }

        [Route("GetEmployee/{id}")]
        // GET: api/MyForms/5
        [HttpGet]
        public async Task<IActionResult> GetEmployeeForm([FromRoute] int id)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var employeeForm = await _context.EmployeeForm.FindAsync(id);

            if (employeeForm == null)
            {
                return NotFound();
            }

            return Ok(employeeForm);
        }

        [Route("PutEmployee/{id}")]
        // PUT: api/MyForms/5
        [HttpPut]
        public async Task<IActionResult> PutEmployeeForm([FromRoute] int id, [FromBody] EmployeeForm employeeForm)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (id != employeeForm.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeeForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeFormExists(id))
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


        [HttpPost]
        [Route("PostEmployeeForms")]
        // POST: api/MyForms
        public async Task<IActionResult> PostEmployeeForm([FromBody] EmployeeForm employeeForm)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            _context.EmployeeForm.Add(employeeForm);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetEmployeeForm", new { id = employeeForm.Id }, employeeForm);

        }


        [Route("DeleteEmployee/{id}")]
        // DELETE: api/MyForms/5
        [HttpDelete]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int id)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var employeeForm = await _context.EmployeeForm.FindAsync(id);
            if (employeeForm == null)
            {
                return NotFound();
            }

            _context.EmployeeForm.Remove(employeeForm);
            await _context.SaveChangesAsync();

            return Ok(employeeForm);
        }

        private bool EmployeeFormExists(int id)
        {
            return _context.EmployeeForm.Any(e => e.Id == id);
        }
    }
}