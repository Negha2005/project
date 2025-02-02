from flask import Blueprint, request, jsonify
from app.models.service import Service

bp = Blueprint('services', __name__, url_prefix='/api/services')

@bp.route('/search', methods=['GET'])
def search_services():
    service_type = request.args.get('service')
    location = request.args.get('location')
    
    query = Service.query
    
    if service_type:
        query = query.filter(Service.name.ilike(f'%{service_type}%'))
    if location:
        query = query.filter(Service.location.ilike(f'%{location}%'))
        
    services = query.all()
    return jsonify([{
        'id': s.id,
        'name': s.name,
        'description': s.description,
        'price': s.price,
        'location': s.location
    } for s in services])
