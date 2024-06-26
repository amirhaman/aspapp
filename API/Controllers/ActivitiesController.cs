using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {   

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(), ct);
        }
        
        [HttpGet("{id}")] //api/activities/IdOfActivity
        public async Task<ActionResult<Activity>> GetActivity(Guid id, CancellationToken ct)
        {
            return await Mediator.Send(new Details.Query{Id = id}, ct);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity, CancellationToken ct)
        {
            await Mediator.Send(new Create.Command {Activity = activity}, ct);
            
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity, CancellationToken ct)
        {
            activity.Id = id;

            await Mediator.Send(new Edit.Command {Activity = activity}, ct);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id, CancellationToken ct)
        {
            await Mediator.Send(new Delete.Command{Id = id}, ct);

            return Ok();
        }
    }
}