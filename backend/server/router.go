package server

import (
	"Athena/backend/server/handlers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func startRouter() *gin.Engine {
	// Creates default gin router with Logger and Recovery middleware already attached
	router := gin.Default()

	// Enables automatic redirection if the current route can't be matched but a
	// handler for the path with (without) the trailing slash exists.
	router.RedirectTrailingSlash = true

	// Create API route group
	api := router.Group("/api")
	{
		// Add /hello GET route to router and define route handler function
		api.POST("/sign-up", handlers.SignupHandler)
		api.POST("/login", handlers.LoginHandler)

	}

	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
