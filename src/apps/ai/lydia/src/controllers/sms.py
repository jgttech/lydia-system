from flask import Blueprint, abort
from src.services.sms import service

blueprint = Blueprint("sms_blueprint", __name__)

@blueprint.route("/sms", methods=[ "GET", "POST" ])
def sms():
    try:
        return service()
    except Exception as e:
        print(e)
        abort(404)