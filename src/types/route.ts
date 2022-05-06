import type {
	FastifyPluginCallback,
	FastifyPluginOptions,
	RouteHandlerMethod,
} from "fastify";
import type { IncomingMessage, Server, ServerResponse } from "http";

export type RouteController = FastifyPluginCallback<FastifyPluginOptions>;

export type RouteService = RouteHandlerMethod<
	Server,
	IncomingMessage,
	ServerResponse
>;
