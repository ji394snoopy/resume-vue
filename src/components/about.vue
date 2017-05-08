<template>
    <div class="responsive segment hasRibbon cell two">
        <a class="ui darkblue ribbon header" id="aboutme">ABOUT ME</a>
        <div class="segment-wrapper">
            <div class="list">
                <div class="item rows">
                    <i class="icon male"></i>
                    <div class="title cell one word-darkblue">Name</div>
                    <div class="content cell two">
                        <a>{{aboutme.name}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon male"></i>
                    <div class="title cell one word-darkblue">Education</div>
                    <div class="content cell two">
                        <a>{{aboutme.school}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon male"></i>
                    <div class="title cell one word-darkblue">Department</div>
                    <div class="content cell two">
                        <a>{{aboutme.department}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon facebook"></i>
                    <div class="title cell one word-darkblue">Facebook</div>
                    <div class="content cell two">
                        <a class="word-darkblue" href="https://www.facebook.com/profile.php?id=100000224732119">{{aboutme.facebook}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon linkedin"></i>
                    <div class="title cell one word-darkblue">LinkedIn</div>
                    <div class="content cell two">
                        <a class="word-darkblue" href="www.linkedin.com/in/jyuan3310">{{aboutme.linkedin}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon mail"></i>
                    <div class="title cell one word-darkblue">Mail</div>
                    <div class="content cell two">
                        <a class="word-darkblue" href="mailto:eric60513@gmail.com">{{aboutme.mail}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon phone"></i>
                    <div class="title cell one word-darkblue">Phone</div>
                    <div class="content cell two">
                        <a class="word-darkblue" href="tel:+886975220827">{{aboutme.phone}}</a>
                    </div>
                </div>
                <div class="item rows">
                    <i class="icon birth"></i>
                    <div class="title cell one word-darkblue">Birth</div>
                    <div class="content cell two">
                        <a>{{aboutme.birth}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		props:['aboutme']
	}
</script>