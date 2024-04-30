using AutoMapper;
using Domain;
using MediatR;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly ILogger<List> _logger;
            
            public Handler(DataContext context , IMapper mapper, ILogger<List> logger)
            {
                _logger = logger;
                _mapper = mapper;
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
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
                // catch (System.Exception)
                // {
                    
                //     _logger.LogInformation($"Task canceled");
                // }

                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                _mapper.Map(request.Activity, activity);
                
                await _context.SaveChangesAsync();
            }
        }
    }
}