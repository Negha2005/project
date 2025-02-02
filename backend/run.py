from app import create_app, db
from app.models.service import Service

app = create_app()

def seed_services():
    services = [
        {
            'name': 'Plumbing',
            'description': 'Expert plumbing services',
            'category': 'Home Maintenance',
            'price': 75.00,
            'location': 'New York'
        },
        {
            'name': 'Electrical',
            'description': 'Professional electrical work',
            'category': 'Home Maintenance',
            'price': 85.00,
            'location': 'Los Angeles'
        },
        {
            'name': 'Cleaning',
            'description': 'Thorough cleaning services',
            'category': 'Home Care',
            'price': 50.00,
            'location': 'Chicago'
        }
    ]
    
    for service_data in services:
        service = Service(**service_data)
        db.session.add(service)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        if not Service.query.first():
            seed_services()
    app.run(debug=True, port=5000)
