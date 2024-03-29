export interface Env {
}


const headers = {
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Headers': 'office',
	'Content-Type': 'application/json',
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		var url = new URL(request.url)

		if (request.method == "GET" && url.pathname == "/products") {
			var products = await env.kv.get("products")
			return new Response(products, {
				headers: {
					'content-type': 'application/json;charset=UTF-8',
					'Access-Control-Allow-Origin': '*'
				}
			})
		}

		if (request.method == "GET" && url.pathname == "/filters") {
			var filters = await env.kv.get("filters")
			return new Response(filters, {
				headers: {
					'content-type': 'application/json;charset=UTF-8',
					'Access-Control-Allow-Origin': '*'
				}
			})
		}

		return new Response("Hello Clouds!");
	},
};
