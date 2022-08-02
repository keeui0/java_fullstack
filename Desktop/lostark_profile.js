
/* 전투정보실 - 캐릭터명 검색 */
$(document).on('click', '.lostark-wrapper .button--profile-search', function (e) {
    var input = $(this).closest('.profile-search').find('.input--profile-search'),
        keyword = input.val();

    /* 검색어 두글자 이하 */
    if (keyword.length < 2) {
        if (!$(this).closest('.profile-search').find('.lui-tooltip').length) {
            input.addClass('input--error').focus();
            var tooltip = new lui.utils.Tooltip({
                parent: $(this).closest('.profile-search'),
                content: GetStringData('ProfileSearchError'),
                cbHide: function (e) { // hide animated callback
                    input.removeClass('input--error');
                }
            });
        }
        return false;
    }

    /* 검색 쿼리 */
    location.href = '/Profile/Character/' + keyword;

    e.preventDefault();
});

/* 전투정보실 - 보유 레이어 */
$(document).on('click', '.lostark-wrapper .button--profile-character-list, .button--profile-character-close', function (e) {
    var button = $('.lostark-wrapper .button--profile-character-list'),
        button2 = $('.button--profile-character-close'),
        characterList = $('.lostark-wrapper .content--profile .profile-character-list'),
        activeClass = 'character-list--show';
    var _show = function () {
        button.attr('aria-expanded', 'true');
        button2.attr('aria-expanded', 'true');
        characterList.addClass(activeClass);
        $(document).on('keydown.profile-character-list', function (e) {
            if (e.keyCode == 27 && !$('.lui-modal.lui-modal--show').length) _hide();
        });
    };
    var _hide = function () {
        button.attr('aria-expanded', 'false');
        button2.attr('aria-expanded', 'false');
        characterList.removeClass(activeClass);
        $(document).off('click.profile-character-list keydown.profile-character-list');
    };
    if (!characterList.hasClass(activeClass)) _show();
    else _hide();
    e.preventDefault();
});

/* 전투정보실 - 검색 결과 없을 시 돌아가기 */
$(document).on('click', '.lostark-wrapper .button--profile-back', function (e) {
    history.back();

    e.preventDefault();
});

/* 전투정보실 - 대표 배지 선택 */
$(document).on('click', '.lostark-wrapper .button--profile-badge:not(.button--profile-badge--active)', function (e) {
    alert('대표 배지 변경!');

    $(this).addClass('button--profile-badge--active').closest('ul').find('.button--profile-badge').not($(this)).removeClass('button--profile-badge--active');
    $(this).closest('.profile-web').find('.profile-main-badge img').attr({ 'src': $(this).find('img').attr('src'), 'alt': $(this).find('img').attr('alt') });

    e.preventDefault();
});

/*카드 세트효과 클릭*/
$(document).on('click', '.lostark-wrapper #btnCardSet', function (e) {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");

        $("#cardList > li").siblings().removeClass("active");

        $("#cardSetList > li").siblings().removeClass("active");
    }
    else {
        var cardList = $(this).data("cardlist");
        var cardSetIndex = $(this).data("cardsetindex");

        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");

        $("#cardList > li").each(function () {
            if ($.inArray($(this).data("cardindex"), cardList) == -1) {
                $(this).removeClass("active");
            }
            else {
                $(this).addClass("active");
            }
        })

        $("#cardSetList > li").each(function () {
            if ($(this).data("cardsetindex") == cardSetIndex) {
                $(this).addClass("active");
            }
            else {
                $(this).removeClass("active");
            }
        })
    }

    e.preventDefault();
});

/* 스킬 */
var tripod = function (t) {
    $.ajax({
        url: '/Profile/GetSkillTripod',
        method: "POST",
        data: { skill: JSON.parse($(t).attr("data-skill")) },
        dataType: 'html',
        success: function (data) {
            $('.profile-skill__item').removeClass('profile-skill__item--selected');
            $(t).parent().addClass('profile-skill__item--selected');
            $('.profile-skill-tripod').html(data);
        },
        error: function (xhr, status, error) {
            ajaxErrorHandler(xhr, status, error);
            return;
        }
    });
}

var proofGraphInit = function () {
    if (_pvpGraph.length > 0) {
        lui.profile.PVPGraph(_pvpGraph)
    }

    if (_aceGraph.length > 0) {
        lui.profile.aceGraph(_aceGraph)
    }
}

var collectionGraphInit = function () {
    lui.profile.collectionGraph(collectionGraph)
}

function profileTabLoad(index) {
    var method = "";
    var params = {};

    if (index == 2) {
        method = "GetCollosseum";
        params = {
            worldNo: _worldNo,
            pcId: _pcId,
            memberNo: _memberNo,
            pvpLevel: _pvpLevel,
        }

        if (!$('#profile-proof').length) {
            return false;
        }
    }
    else if (index == 3) {
        method = "GetCollection";
        params = {
            memberNo: _memberNo,
            worldNo: _worldNo,
            pcId: _pcId,
        }

        if (!$('#profile-collection').length) {
            return false;
        }
    }
    else {
        return false;
    }

    $.ajax({
        url: '/Profile/' + method,
        method: "POST",
        data: params,
        dataType: 'html',
        success: function (data) {
            if (index == 2) {
                $('#profile-proof').html(data);
                lui.profile.proof();
                proofGraphInit();
            }
            else if (index == 3) {
                $('#profile-collection').html(data);
                lui.profile.collection();
                collectionGraphInit();
            }
        },
        error: function (xhr, status, error) {
            ajaxErrorHandler(xhr, status, error);
            return;
        }
    });
}