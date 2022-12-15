package handlers

import (
	"Athena/backend/model"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SignupHandler(ctx *gin.Context) {
	signUpParams := &model.SignUpParams{}
	if err := ctx.ShouldBindJSON(signUpParams); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	//temporary logging
	x, _ := ioutil.ReadAll(ctx.Request.Body)
	fmt.Printf("%s", string(x))
	fmt.Printf("%s", signUpParams.Email)

	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed up successfully.",
		"jwt": "123456789",
		// "email":    signUpParams.Email,
		// "password": signUpParams.Password,
	})
}
