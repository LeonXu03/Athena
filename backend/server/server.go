package server

func Start() {
	router := startRouter()

	// Start listening and serving requests
	router.Run(":8100")
}
