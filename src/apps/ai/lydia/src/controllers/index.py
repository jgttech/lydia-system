from flask import Blueprint, abort

blueprint = Blueprint("index_blueprint", __name__)

@blueprint.route("/", methods=[ "GET" ])
def index():
    try:
        return "Release Version: 0.0.1"
    except Exception as e:
        print(e)
        abort(404)