using Domain;
using MediatR;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;
            private readonly ILogger<List> _logger;
            
            public Handler(DataContext context , ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }
            
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _logger.LogInformation($"cancelationToken is {cancellationToken}");
                // turn on following line to test cancelation
                // try
                // {
                //     for (var i = 0; i< 10; i++)
                //     {
                //         // access cancelationToken throw if canceled
                //         cancellationToken.ThrowIfCancellationRequested();
                //         await Task.Delay(1000, cancellationToken);
                //         _logger.LogInformation($"Task {i} has completed");
                //     }
                // }
                // catch (Exception)
                // {
                    
                //     _logger.LogInformation($"Task canceled");
                // }

                var activity = await _context.Activities.FindAsync(request.Id);

                _context.Remove(activity);

                await _context.SaveChangesAsync();
                
            }
        }

    }
}